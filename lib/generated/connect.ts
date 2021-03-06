import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [connect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Connect extends PolicyStatement {
  public servicePrefix = 'connect';

  /**
   * Statement provider for service [connect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to associate approved origin for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateApprovedOrigin() {
    this.to('connect:AssociateApprovedOrigin');
    return this;
  }

  /**
   * Grants permissions to associate instance storage for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStorageResourceType()
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   * - firehose:DescribeDeliveryStream
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - kinesis:DescribeStream
   * - kms:CreateGrant
   * - kms:DescribeKey
   * - s3:GetBucketAcl
   * - s3:GetBucketLocation
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateInstanceStorageConfig() {
    this.to('connect:AssociateInstanceStorageConfig');
    return this;
  }

  /**
   * Grants permissions to associate a Lambda function for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - lambda:AddPermission
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateLambdaFunction() {
    this.to('connect:AssociateLambdaFunction');
    return this;
  }

  /**
   * Grants permissions to associate a Lex bot for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - lex:GetBot
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateLexBot() {
    this.to('connect:AssociateLexBot');
    return this;
  }

  /**
   * Grants permissions to associate queues with a routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateRoutingProfileQueues.html
   */
  public toAssociateRoutingProfileQueues() {
    this.to('connect:AssociateRoutingProfileQueues');
    return this;
  }

  /**
   * Grants permissions to associate a security key for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateSecurityKey() {
    this.to('connect:AssociateSecurityKey');
    return this;
  }

  /**
   * Grants permissions to create a contact flow in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateContactFlow.html
   */
  public toCreateContactFlow() {
    this.to('connect:CreateContactFlow');
    return this;
  }

  /**
   * Grants permissions to create a new Amazon Connect instance. The associated required actions grant permissions to configure instance settings.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:AuthorizeApplication
   * - ds:CheckAlias
   * - ds:CreateAlias
   * - ds:CreateDirectory
   * - ds:CreateIdentityPoolDirectory
   * - ds:DeleteDirectory
   * - ds:DescribeDirectories
   * - ds:UnauthorizeApplication
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toCreateInstance() {
    this.to('connect:CreateInstance');
    return this;
  }

  /**
   * Grants permission to create a quick connect in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateQuickConnect.html
   */
  public toCreateQuickConnect() {
    this.to('connect:CreateQuickConnect');
    return this;
  }

  /**
   * Grants permission to create a routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateRoutingProfile.html
   */
  public toCreateRoutingProfile() {
    this.to('connect:CreateRoutingProfile');
    return this;
  }

  /**
   * Grants permission to create a user for the specified Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    this.to('connect:CreateUser');
    return this;
  }

  /**
   * Grants permissions to create a user hierarchy group in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUserHierarchyGroup.html
   */
  public toCreateUserHierarchyGroup() {
    this.to('connect:CreateUserHierarchyGroup');
    return this;
  }

  /**
   * Grants permissions to delete an Amazon Connect instance. When you remove an instance, the link to an existing AWS directory is also removed.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:DeleteDirectory
   * - ds:DescribeDirectories
   * - ds:UnauthorizeApplication
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDeleteInstance() {
    this.to('connect:DeleteInstance');
    return this;
  }

  /**
   * Grants permissions to delete a quick connect in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteQuickConnect.html
   */
  public toDeleteQuickConnect() {
    this.to('connect:DeleteQuickConnect');
    return this;
  }

  /**
   * Grants permissions to delete a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('connect:DeleteUser');
    return this;
  }

  /**
   * Grants permissions to delete a user hierarchy group in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUserHierarchyGroup.html
   */
  public toDeleteUserHierarchyGroup() {
    this.to('connect:DeleteUserHierarchyGroup');
    return this;
  }

  /**
   * Grants permissions to describe a contact flow in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContactFlow.html
   */
  public toDescribeContactFlow() {
    this.to('connect:DescribeContactFlow');
    return this;
  }

  /**
   * Grants permissions to view details of an Amazon Connect instance. This is required to create an instance.
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDescribeInstance() {
    this.to('connect:DescribeInstance');
    return this;
  }

  /**
   * Grants permissions to view the attribute details of an existing Amazon Connect instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAttributeType()
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDescribeInstanceAttribute() {
    this.to('connect:DescribeInstanceAttribute');
    return this;
  }

  /**
   * Grants permissions to view the instance storage configuration for an existing Amazon Connect instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifStorageResourceType()
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDescribeInstanceStorageConfig() {
    this.to('connect:DescribeInstanceStorageConfig');
    return this;
  }

  /**
   * Grants permissions to describe a quick connect in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeQuickConnect.html
   */
  public toDescribeQuickConnect() {
    this.to('connect:DescribeQuickConnect');
    return this;
  }

  /**
   * Grants permissions to describe a routing profile in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html
   */
  public toDescribeRoutingProfile() {
    this.to('connect:DescribeRoutingProfile');
    return this;
  }

  /**
   * Grants permissions to describe a user in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    this.to('connect:DescribeUser');
    return this;
  }

  /**
   * Grants permissions to describe a hierarchy group for an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyGroup.html
   */
  public toDescribeUserHierarchyGroup() {
    this.to('connect:DescribeUserHierarchyGroup');
    return this;
  }

  /**
   * Grants permissions to describe the hierarchy structure for an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyStructure.html
   */
  public toDescribeUserHierarchyStructure() {
    this.to('connect:DescribeUserHierarchyStructure');
    return this;
  }

  /**
   * Grants permissions to disassociate approved origin for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateApprovedOrigin() {
    this.to('connect:DisassociateApprovedOrigin');
    return this;
  }

  /**
   * Grants permissions to disassociate instance storage for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStorageResourceType()
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateInstanceStorageConfig() {
    this.to('connect:DisassociateInstanceStorageConfig');
    return this;
  }

  /**
   * Grants permissions to disassociate a Lambda function for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - lambda:RemovePermission
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateLambdaFunction() {
    this.to('connect:DisassociateLambdaFunction');
    return this;
  }

  /**
   * Grants permissions to disassociate a Lex bot for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateLexBot() {
    this.to('connect:DisassociateLexBot');
    return this;
  }

  /**
   * Grants permissions to disassociate queues from a routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateRoutingProfileQueues.html
   */
  public toDisassociateRoutingProfileQueues() {
    this.to('connect:DisassociateRoutingProfileQueues');
    return this;
  }

  /**
   * Grants permissions to disassociate the security key for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateSecurityKey() {
    this.to('connect:DisassociateSecurityKey');
    return this;
  }

  /**
   * Grants permissions to retrieve the contact attributes for the specified contact.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetContactAttributes.html
   */
  public toGetContactAttributes() {
    this.to('connect:GetContactAttributes');
    return this;
  }

  /**
   * Grants permissions to retrieve current metric data for the queues in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetCurrentMetricData.html
   */
  public toGetCurrentMetricData() {
    this.to('connect:GetCurrentMetricData');
    return this;
  }

  /**
   * Allows federation into an instance when using SAML-based authentication for identity management.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetFederationToken.html
   */
  public toGetFederationToken() {
    this.to('connect:GetFederationToken');
    return this;
  }

  /**
   * Grants permissions to federate in to an Amazon Connect instance (Log in as administrator functionality in the AWS console).
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - connect:DescribeInstance
   * - connect:ListInstances
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public toGetFederationTokens() {
    this.to('connect:GetFederationTokens');
    return this;
  }

  /**
   * Grants permissions to retrieve historical metric data for queues in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html
   */
  public toGetMetricData() {
    this.to('connect:GetMetricData');
    return this;
  }

  /**
   * Grants permissions to view approved origins of an existing Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListApprovedOrigins() {
    this.to('connect:ListApprovedOrigins');
    return this;
  }

  /**
   * Grants permissions to list contact flow resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactFlows.html
   */
  public toListContactFlows() {
    this.to('connect:ListContactFlows');
    return this;
  }

  /**
   * Grants permissions to list hours of operation resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListHoursOfOperations.html
   */
  public toListHoursOfOperations() {
    this.to('connect:ListHoursOfOperations');
    return this;
  }

  /**
   * Grants permissions to view the attributes of an existing Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListInstanceAttributes() {
    this.to('connect:ListInstanceAttributes');
    return this;
  }

  /**
   * Grants permissions to view storage configurations of an existing Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListInstanceStorageConfigs() {
    this.to('connect:ListInstanceStorageConfigs');
    return this;
  }

  /**
   * Grants permissions to view the Amazon Connect instances associated with an AWS account.
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListInstances() {
    this.to('connect:ListInstances');
    return this;
  }

  /**
   * Grants permissions to view the Lambda functions of an existing Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListLambdaFunctions() {
    this.to('connect:ListLambdaFunctions');
    return this;
  }

  /**
   * Grants permissions to view the Lex bots of an existing Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListLexBots() {
    this.to('connect:ListLexBots');
    return this;
  }

  /**
   * Grants permissions to list phone number resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbers.html
   */
  public toListPhoneNumbers() {
    this.to('connect:ListPhoneNumbers');
    return this;
  }

  /**
   * Grants permissions to list prompt resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPrompts.html
   */
  public toListPrompts() {
    this.to('connect:ListPrompts');
    return this;
  }

  /**
   * Grants permissions to list queue resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQueues.html
   */
  public toListQueues() {
    this.to('connect:ListQueues');
    return this;
  }

  /**
   * Grants permissions to list quick connect resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQuickConnects.html
   */
  public toListQuickConnects() {
    this.to('connect:ListQuickConnects');
    return this;
  }

  /**
   * Grants permissions to list queue resources in a routing profile in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRoutingProfileQueues.html
   */
  public toListRoutingProfileQueues() {
    this.to('connect:ListRoutingProfileQueues');
    return this;
  }

  /**
   * Grants permissions to list routing profile resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRoutingProfiles.html
   */
  public toListRoutingProfiles() {
    this.to('connect:ListRoutingProfiles');
    return this;
  }

  /**
   * Grants permissions to view the security keys of an existing Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListSecurityKeys() {
    this.to('connect:ListSecurityKeys');
    return this;
  }

  /**
   * Grants permissions to list security profile resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListSecurityProfiles.html
   */
  public toListSecurityProfiles() {
    this.to('connect:ListSecurityProfiles');
    return this;
  }

  /**
   * Grants permissions to list tags for an Amazon Connect resource.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('connect:ListTagsForResource');
    return this;
  }

  /**
   * Grants permissions to list the hierarchy group resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUserHierarchyGroups.html
   */
  public toListUserHierarchyGroups() {
    this.to('connect:ListUserHierarchyGroups');
    return this;
  }

  /**
   * Grants permissions to list user resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    this.to('connect:ListUsers');
    return this;
  }

  /**
   * Grants permissions to resume recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ResumeContactRecording.html
   */
  public toResumeContactRecording() {
    this.to('connect:ResumeContactRecording');
    return this;
  }

  /**
   * Grants permissions to initiate a chat using the Amazon Connect API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html
   */
  public toStartChatContact() {
    this.to('connect:StartChatContact');
    return this;
  }

  /**
   * Grants permissions to start recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactRecording.html
   */
  public toStartContactRecording() {
    this.to('connect:StartContactRecording');
    return this;
  }

  /**
   * Grants permissions to initiate outbound calls using the Amazon Connect API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundVoiceContact.html
   */
  public toStartOutboundVoiceContact() {
    this.to('connect:StartOutboundVoiceContact');
    return this;
  }

  /**
   * Grants permissions to initiate a task using the Amazon Connect API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartTaskContact.html
   */
  public toStartTaskContact() {
    this.to('connect:StartTaskContact');
    return this;
  }

  /**
   * Grants permissions to stop contacts that were initiated using the Amazon Connect API. If you use this operation on an active contact the contact ends, even if the agent is active on a call with a customer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContact.html
   */
  public toStopContact() {
    this.to('connect:StopContact');
    return this;
  }

  /**
   * Grants permissions to stop recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContactRecording.html
   */
  public toStopContactRecording() {
    this.to('connect:StopContactRecording');
    return this;
  }

  /**
   * Grants permissions to suspend recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SuspendContactRecording.html
   */
  public toSuspendContactRecording() {
    this.to('connect:SuspendContactRecording');
    return this;
  }

  /**
   * Grants permissions to tag an Amazon Connect resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('connect:TagResource');
    return this;
  }

  /**
   * Grants permissions to untag an Amazon Connect resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('connect:UntagResource');
    return this;
  }

  /**
   * Grants permissions to create or update the contact attributes associated with the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactAttributes.html
   */
  public toUpdateContactAttributes() {
    this.to('connect:UpdateContactAttributes');
    return this;
  }

  /**
   * Grants permissions to update contact flow content in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowContent.html
   */
  public toUpdateContactFlowContent() {
    this.to('connect:UpdateContactFlowContent');
    return this;
  }

  /**
   * Grants permissions to update the name and description of a contact flow in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowName.html
   */
  public toUpdateContactFlowName() {
    this.to('connect:UpdateContactFlowName');
    return this;
  }

  /**
   * Grants permissions to update the attribute for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAttributeType()
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - logs:CreateLogGroup
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toUpdateInstanceAttribute() {
    this.to('connect:UpdateInstanceAttribute');
    return this;
  }

  /**
   * Grants permissions to update the storage configuration for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStorageResourceType()
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   * - firehose:DescribeDeliveryStream
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - kinesis:DescribeStream
   * - kms:CreateGrant
   * - kms:DescribeKey
   * - s3:GetBucketAcl
   * - s3:GetBucketLocation
   *
   * https://docs.aws.amazon.com/connect/amazon-connect-console/grant-instance-permissions
   */
  public toUpdateInstanceStorageConfig() {
    this.to('connect:UpdateInstanceStorageConfig');
    return this;
  }

  /**
   * Grants permissions to update the configuration of a quick connect in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQuickConnectConfig.html
   */
  public toUpdateQuickConnectConfig() {
    this.to('connect:UpdateQuickConnectConfig');
    return this;
  }

  /**
   * Grants permissions to update a quick connect name and description in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQuickConnectName.html
   */
  public toUpdateQuickConnectName() {
    this.to('connect:UpdateQuickConnectName');
    return this;
  }

  /**
   * Grants permissions to update the concurrency in a routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileConcurrency.html
   */
  public toUpdateRoutingProfileConcurrency() {
    this.to('connect:UpdateRoutingProfileConcurrency');
    return this;
  }

  /**
   * Grants permissions to update the outbound queue in a routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileDefaultOutboundQueue.html
   */
  public toUpdateRoutingProfileDefaultOutboundQueue() {
    this.to('connect:UpdateRoutingProfileDefaultOutboundQueue');
    return this;
  }

  /**
   * Grants permissions to update a routing profile name and description in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileName.html
   */
  public toUpdateRoutingProfileName() {
    this.to('connect:UpdateRoutingProfileName');
    return this;
  }

  /**
   * Grants permissions to update the queues in routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileQueues.html
   */
  public toUpdateRoutingProfileQueues() {
    this.to('connect:UpdateRoutingProfileQueues');
    return this;
  }

  /**
   * Grants permissions to update a hierarchy group for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchy.html
   */
  public toUpdateUserHierarchy() {
    this.to('connect:UpdateUserHierarchy');
    return this;
  }

  /**
   * Grants permissions to update a user hierarchy group name in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchyGroupName.html
   */
  public toUpdateUserHierarchyGroupName() {
    this.to('connect:UpdateUserHierarchyGroupName');
    return this;
  }

  /**
   * Grants permissions to update user hierarchy structure in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchyStructure.html
   */
  public toUpdateUserHierarchyStructure() {
    this.to('connect:UpdateUserHierarchyStructure');
    return this;
  }

  /**
   * Grants permissions to update identity information for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserIdentityInfo.html
   */
  public toUpdateUserIdentityInfo() {
    this.to('connect:UpdateUserIdentityInfo');
    return this;
  }

  /**
   * Grants permissions to update phone configuration settings for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserPhoneConfig.html
   */
  public toUpdateUserPhoneConfig() {
    this.to('connect:UpdateUserPhoneConfig');
    return this;
  }

  /**
   * Grants permissions to update a routing profile for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserRoutingProfile.html
   */
  public toUpdateUserRoutingProfile() {
    this.to('connect:UpdateUserRoutingProfile');
    return this;
  }

  /**
   * Grants permissions to update security profiles for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserSecurityProfiles.html
   */
  public toUpdateUserSecurityProfiles() {
    this.to('connect:UpdateUserSecurityProfiles');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateApprovedOrigin",
      "AssociateInstanceStorageConfig",
      "AssociateLambdaFunction",
      "AssociateLexBot",
      "AssociateRoutingProfileQueues",
      "AssociateSecurityKey",
      "CreateContactFlow",
      "CreateInstance",
      "CreateQuickConnect",
      "CreateRoutingProfile",
      "CreateUser",
      "CreateUserHierarchyGroup",
      "DeleteInstance",
      "DeleteQuickConnect",
      "DeleteUser",
      "DeleteUserHierarchyGroup",
      "DisassociateApprovedOrigin",
      "DisassociateInstanceStorageConfig",
      "DisassociateLambdaFunction",
      "DisassociateLexBot",
      "DisassociateRoutingProfileQueues",
      "DisassociateSecurityKey",
      "GetFederationTokens",
      "ResumeContactRecording",
      "StartChatContact",
      "StartContactRecording",
      "StartOutboundVoiceContact",
      "StartTaskContact",
      "StopContact",
      "StopContactRecording",
      "SuspendContactRecording",
      "UpdateContactAttributes",
      "UpdateContactFlowContent",
      "UpdateContactFlowName",
      "UpdateInstanceAttribute",
      "UpdateInstanceStorageConfig",
      "UpdateQuickConnectConfig",
      "UpdateQuickConnectName",
      "UpdateRoutingProfileConcurrency",
      "UpdateRoutingProfileDefaultOutboundQueue",
      "UpdateRoutingProfileName",
      "UpdateRoutingProfileQueues",
      "UpdateUserHierarchy",
      "UpdateUserHierarchyGroupName",
      "UpdateUserHierarchyStructure",
      "UpdateUserIdentityInfo",
      "UpdateUserPhoneConfig",
      "UpdateUserRoutingProfile",
      "UpdateUserSecurityProfiles"
    ],
    "Read": [
      "DescribeContactFlow",
      "DescribeInstance",
      "DescribeInstanceAttribute",
      "DescribeInstanceStorageConfig",
      "DescribeQuickConnect",
      "DescribeRoutingProfile",
      "DescribeUser",
      "DescribeUserHierarchyGroup",
      "DescribeUserHierarchyStructure",
      "GetContactAttributes",
      "GetCurrentMetricData",
      "GetFederationToken",
      "GetMetricData",
      "ListRoutingProfileQueues",
      "ListTagsForResource"
    ],
    "List": [
      "ListApprovedOrigins",
      "ListContactFlows",
      "ListHoursOfOperations",
      "ListInstanceAttributes",
      "ListInstanceStorageConfigs",
      "ListInstances",
      "ListLambdaFunctions",
      "ListLexBots",
      "ListPhoneNumbers",
      "ListPrompts",
      "ListQueues",
      "ListQuickConnects",
      "ListRoutingProfiles",
      "ListSecurityKeys",
      "ListSecurityProfiles",
      "ListUserHierarchyGroups",
      "ListUsers"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type contact to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-attributes.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param contactId - Identifier for the contactId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onContact(instanceId: string, contactId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/contact/${ContactId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${ContactId}', contactId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-agents.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param userId - Identifier for the userId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(instanceId: string, userId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/agent/${UserId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${UserId}', userId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type routing-profile to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param routingProfileId - Identifier for the routingProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRoutingProfile(instanceId: string, routingProfileId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/routing-profile/${RoutingProfileId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${RoutingProfileId}', routingProfileId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type security-profile to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param securityProfileId - Identifier for the securityProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSecurityProfile(instanceId: string, securityProfileId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/security-profile/${SecurityProfileId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${SecurityProfileId}', securityProfileId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hierarchy-group to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param hierarchyGroupId - Identifier for the hierarchyGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHierarchyGroup(instanceId: string, hierarchyGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/agent-group/${HierarchyGroupId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${HierarchyGroupId}', hierarchyGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type queue to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/create-queue.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param queueId - Identifier for the queueId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onQueue(instanceId: string, queueId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/queue/${QueueId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${QueueId}', queueId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type quick-connect to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/quick-connects.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param quickConnectId - Identifier for the quickConnectId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQuickConnect(instanceId: string, quickConnectId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/transfer-destination/${QuickConnectId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${QuickConnectId}', quickConnectId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type contact-flow to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-flows.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param contactFlowId - Identifier for the contactFlowId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContactFlow(instanceId: string, contactFlowId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/contact-flow/${ContactFlowId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${ContactFlowId}', contactFlowId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hours-of-operation to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param hoursOfOperationId - Identifier for the hoursOfOperationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHoursOfOperation(instanceId: string, hoursOfOperationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/operating-hours/${HoursOfOperationId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${HoursOfOperationId}', hoursOfOperationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type phone-number to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param phoneNumberId - Identifier for the phoneNumberId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPhoneNumber(instanceId: string, phoneNumberId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/phone-numbers/${PhoneNumberId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${PhoneNumberId}', phoneNumberId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the attribute type of the Amazon Connect instance.
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toDescribeInstanceAttribute()
   * - .toUpdateInstanceAttribute()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAttributeType(value: string | string[], operator?: Operator | string) {
    return this.if(`connect:AttributeType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by restricting the storage resource type of the Amazon Connect instance storage configuration.
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toAssociateInstanceStorageConfig()
   * - .toDescribeInstanceStorageConfig()
   * - .toDisassociateInstanceStorageConfig()
   * - .toUpdateInstanceStorageConfig()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifStorageResourceType(value: string | string[], operator?: Operator | string) {
    return this.if(`connect:StorageResourceType`, value, operator || 'StringLike');
  }
}
