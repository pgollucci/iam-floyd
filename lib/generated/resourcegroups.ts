import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [resource-groups](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourcegroups.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ResourceGroups extends PolicyStatement {
  public servicePrefix = 'resource-groups';

  /**
   * Statement provider for service [resource-groups](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourcegroups.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a resource group with a specified name, description, and resource query
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    this.to('resource-groups:CreateGroup');
    return this;
  }

  /**
   * Grants permission to delete a specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    this.to('resource-groups:DeleteGroup');
    return this;
  }

  /**
   * Grants permission to get information of a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroup.html
   */
  public toGetGroup() {
    this.to('resource-groups:GetGroup');
    return this;
  }

  /**
   * Grants permission to get the service configuration associated with the specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupConfiguration.html
   */
  public toGetGroupConfiguration() {
    this.to('resource-groups:GetGroupConfiguration');
    return this;
  }

  /**
   * Grants permission to get the query associated with a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupQuery.html
   */
  public toGetGroupQuery() {
    this.to('resource-groups:GetGroupQuery');
    return this;
  }

  /**
   * Grants permission to get the tags associated with a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetTags.html
   */
  public toGetTags() {
    this.to('resource-groups:GetTags');
    return this;
  }

  /**
   * Grants permission to add the specified resources to the specified group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GroupResources.html
   */
  public toGroupResources() {
    this.to('resource-groups:GroupResources');
    return this;
  }

  /**
   * Grants permission to list the resources that are members of a specified resource group
   *
   * Access Level: List
   *
   * Dependent actions:
   * - cloudformation:DescribeStacks
   * - cloudformation:ListStackResources
   * - tag:GetResources
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroupResources.html
   */
  public toListGroupResources() {
    this.to('resource-groups:ListGroupResources');
    return this;
  }

  /**
   * Grants permission to list all resource groups in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    this.to('resource-groups:ListGroups');
    return this;
  }

  /**
   * Grants permission to add a resource-based policy for the specified group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/LM_REDIRECT
   */
  public toPutGroupPolicy() {
    this.to('resource-groups:PutGroupPolicy');
    return this;
  }

  /**
   * Grants permission to search for AWS resources matching the given query
   *
   * Access Level: List
   *
   * Dependent actions:
   * - cloudformation:DescribeStacks
   * - cloudformation:ListStackResources
   * - tag:GetResources
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_SearchResources.html
   */
  public toSearchResources() {
    this.to('resource-groups:SearchResources');
    return this;
  }

  /**
   * Grants permission to tag a specified resource group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_Tag.html
   */
  public toTag() {
    this.to('resource-groups:Tag');
    return this;
  }

  /**
   * Grants permission to remove the specified resources from the specified group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UngroupResources.html
   */
  public toUngroupResources() {
    this.to('resource-groups:UngroupResources');
    return this;
  }

  /**
   * Grants permission to remove tags associated with a specified resource group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_Untag.html
   */
  public toUntag() {
    this.to('resource-groups:Untag');
    return this;
  }

  /**
   * Grants permission to update a specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    this.to('resource-groups:UpdateGroup');
    return this;
  }

  /**
   * Grants permission to update the query associated with a specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroupQuery.html
   */
  public toUpdateGroupQuery() {
    this.to('resource-groups:UpdateGroupQuery');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateGroup",
      "DeleteGroup",
      "GroupResources",
      "PutGroupPolicy",
      "UngroupResources",
      "UpdateGroup",
      "UpdateGroupQuery"
    ],
    "Read": [
      "GetGroup",
      "GetGroupConfiguration",
      "GetGroupQuery",
      "GetTags"
    ],
    "List": [
      "ListGroupResources",
      "ListGroups",
      "SearchResources"
    ],
    "Tagging": [
      "Tag",
      "Untag"
    ]
  };

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html
   *
   * @param groupName - Identifier for the groupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGroup(groupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:resource-groups:${Region}:${Account}:group/${GroupName}';
    arn = arn.replace('${GroupName}', groupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
