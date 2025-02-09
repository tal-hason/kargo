// @generated by protoc-gen-connect-query v2.0.0 with parameter "target=ts"
// @generated from file service/v1alpha1/service.proto (package akuity.io.kargo.service.v1alpha1, syntax proto3)
/* eslint-disable */

import { KargoService } from "./service_pb";

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetVersionInfo
 */
export const getVersionInfo = KargoService.method.getVersionInfo;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetConfig
 */
export const getConfig = KargoService.method.getConfig;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetPublicConfig
 */
export const getPublicConfig = KargoService.method.getPublicConfig;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.AdminLogin
 */
export const adminLogin = KargoService.method.adminLogin;

/**
 * TODO(devholic): Add ApplyResource API
 * rpc ApplyResource(ApplyResourceRequest) returns (ApplyResourceRequest);
 *
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.CreateResource
 */
export const createResource = KargoService.method.createResource;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.CreateOrUpdateResource
 */
export const createOrUpdateResource = KargoService.method.createOrUpdateResource;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.UpdateResource
 */
export const updateResource = KargoService.method.updateResource;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteResource
 */
export const deleteResource = KargoService.method.deleteResource;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListStages
 */
export const listStages = KargoService.method.listStages;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListImages
 */
export const listImages = KargoService.method.listImages;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetStage
 */
export const getStage = KargoService.method.getStage;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteStage
 */
export const deleteStage = KargoService.method.deleteStage;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.RefreshStage
 */
export const refreshStage = KargoService.method.refreshStage;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListPromotions
 */
export const listPromotions = KargoService.method.listPromotions;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetPromotion
 */
export const getPromotion = KargoService.method.getPromotion;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.AbortPromotion
 */
export const abortPromotion = KargoService.method.abortPromotion;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteProject
 */
export const deleteProject = KargoService.method.deleteProject;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetProject
 */
export const getProject = KargoService.method.getProject;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListProjects
 */
export const listProjects = KargoService.method.listProjects;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ApproveFreight
 */
export const approveFreight = KargoService.method.approveFreight;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteFreight
 */
export const deleteFreight = KargoService.method.deleteFreight;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetFreight
 */
export const getFreight = KargoService.method.getFreight;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.PromoteToStage
 */
export const promoteToStage = KargoService.method.promoteToStage;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.PromoteDownstream
 */
export const promoteDownstream = KargoService.method.promoteDownstream;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.QueryFreight
 */
export const queryFreight = KargoService.method.queryFreight;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.UpdateFreightAlias
 */
export const updateFreightAlias = KargoService.method.updateFreightAlias;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.Reverify
 */
export const reverify = KargoService.method.reverify;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.AbortVerification
 */
export const abortVerification = KargoService.method.abortVerification;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListWarehouses
 */
export const listWarehouses = KargoService.method.listWarehouses;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetWarehouse
 */
export const getWarehouse = KargoService.method.getWarehouse;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteWarehouse
 */
export const deleteWarehouse = KargoService.method.deleteWarehouse;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.RefreshWarehouse
 */
export const refreshWarehouse = KargoService.method.refreshWarehouse;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.CreateCredentials
 */
export const createCredentials = KargoService.method.createCredentials;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteCredentials
 */
export const deleteCredentials = KargoService.method.deleteCredentials;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetCredentials
 */
export const getCredentials = KargoService.method.getCredentials;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListCredentials
 */
export const listCredentials = KargoService.method.listCredentials;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.UpdateCredentials
 */
export const updateCredentials = KargoService.method.updateCredentials;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListProjectSecrets
 */
export const listProjectSecrets = KargoService.method.listProjectSecrets;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.CreateProjectSecret
 */
export const createProjectSecret = KargoService.method.createProjectSecret;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.UpdateProjectSecret
 */
export const updateProjectSecret = KargoService.method.updateProjectSecret;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteProjectSecret
 */
export const deleteProjectSecret = KargoService.method.deleteProjectSecret;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListAnalysisTemplates
 */
export const listAnalysisTemplates = KargoService.method.listAnalysisTemplates;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetAnalysisTemplate
 */
export const getAnalysisTemplate = KargoService.method.getAnalysisTemplate;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteAnalysisTemplate
 */
export const deleteAnalysisTemplate = KargoService.method.deleteAnalysisTemplate;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetAnalysisRun
 */
export const getAnalysisRun = KargoService.method.getAnalysisRun;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListProjectEvents
 */
export const listProjectEvents = KargoService.method.listProjectEvents;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.CreateRole
 */
export const createRole = KargoService.method.createRole;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteRole
 */
export const deleteRole = KargoService.method.deleteRole;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetRole
 */
export const getRole = KargoService.method.getRole;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.Grant
 */
export const grant = KargoService.method.grant;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListRoles
 */
export const listRoles = KargoService.method.listRoles;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.Revoke
 */
export const revoke = KargoService.method.revoke;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.UpdateRole
 */
export const updateRole = KargoService.method.updateRole;
