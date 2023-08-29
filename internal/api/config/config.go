package config

import (
	"time"

	"github.com/kelseyhightower/envconfig"

	"github.com/akuity/kargo/internal/api/dex"
	"github.com/akuity/kargo/internal/api/oidc"
	"github.com/akuity/kargo/internal/os"
	"github.com/akuity/kargo/internal/types"
)

// AdminConfig represents configuration for an admin account.
type AdminConfig struct {
	// HashedPassword is a bcrypt hash of the password for the admin account.
	HashedPassword string `envconfig:"ADMIN_ACCOUNT_PASSWORD_HASH" required:"true"`
	// TokenIssuer is the value to be used in the ISS claim of ID tokens issued for
	// the admin account.
	TokenIssuer string `envconfig:"ADMIN_ACCOUNT_TOKEN_ISSUER" required:"true"`
	// TokenAudience is the value to be used in the AUD claim of ID tokens issued
	// for the admin account.
	TokenAudience string `envconfig:"ADMIN_ACCOUNT_TOKEN_AUDIENCE" required:"true"`
	// TokenSigningKey is the key used to sign ID tokens for the admin account.
	TokenSigningKey []byte `envconfig:"ADMIN_ACCOUNT_TOKEN_SIGNING_KEY" required:"true"`
	// TokenTTL specifies how long ID tokens for the admin account are valid. i.e.
	// The expiry will be the time of issue plus this duration.
	TokenTTL time.Duration `envconfig:"ADMIN_ACCOUNT_TOKEN_TTL" default:"1h"`
}

// AdminConfigFromEnv returns an AdminConfig populated from environment
// variables.
func AdminConfigFromEnv() AdminConfig {
	cfg := AdminConfig{}
	envconfig.MustProcess("", &cfg)
	return cfg
}

type ServerConfig struct {
	StandardConfig
	LocalMode      bool
	OIDCConfig     *oidc.Config
	AdminConfig    *AdminConfig
	DexProxyConfig *dex.ProxyConfig
}

type StandardConfig struct {
	GracefulShutdownTimeout time.Duration `envconfig:"GRACEFUL_SHUTDOWN_TIMEOUT" default:"30s"`
	UIDirectory             string        `envconfig:"UI_DIR" default:"./ui/build"`
}

func ServerConfigFromEnv() ServerConfig {
	cfg := ServerConfig{}
	envconfig.MustProcess("", &cfg.StandardConfig)
	if types.MustParseBool(os.GetEnv("ADMIN_ACCOUNT_ENABLED", "false")) {
		adminCfg := AdminConfigFromEnv()
		cfg.AdminConfig = &adminCfg
	}
	if types.MustParseBool(os.GetEnv("OIDC_ENABLED", "false")) {
		oidcCfg := oidc.ConfigFromEnv()
		cfg.OIDCConfig = &oidcCfg
	}
	if types.MustParseBool(os.GetEnv("DEX_ENABLED", "false")) {
		dexProxyCfg := dex.ProxyConfigFromEnv()
		cfg.DexProxyConfig = &dexProxyCfg
	}
	return cfg
}