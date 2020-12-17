import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [wellarchitected](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswell-architectedtool.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Wellarchitected extends PolicyStatement {
  public servicePrefix = 'wellarchitected';

  /**
   * Statement provider for service [wellarchitected](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswell-architectedtool.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a lens to the specified workload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-add.html
   */
  public toAssociateLenses() {
    this.to('wellarchitected:AssociateLenses');
    return this;
  }

  /**
   * Grants permission to create a new milestone for the specified workload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/milestones-save.html
   */
  public toCreateMilestone() {
    this.to('wellarchitected:CreateMilestone');
    return this;
  }

  /**
   * Grants permission to create a new workload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html
   */
  public toCreateWorkload() {
    this.to('wellarchitected:CreateWorkload');
    return this;
  }

  /**
   * Grants permission to share a workload with another account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html
   */
  public toCreateWorkloadShare() {
    this.to('wellarchitected:CreateWorkloadShare');
    return this;
  }

  /**
   * Grants permission to delete an existing workload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-delete.html
   */
  public toDeleteWorkload() {
    this.to('wellarchitected:DeleteWorkload');
    return this;
  }

  /**
   * Grants permission to delete an existing workload share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/sharing-remove.html
   */
  public toDeleteWorkloadShare() {
    this.to('wellarchitected:DeleteWorkloadShare');
    return this;
  }

  /**
   * Grants permission to disassociate a lens from the specified workload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-remove.html
   */
  public toDisassociateLenses() {
    this.to('wellarchitected:DisassociateLenses');
    return this;
  }

  /**
   * Grants permission to retrieve the specified answer from the specified lens review
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/start-workflow-review.html
   */
  public toGetAnswer() {
    this.to('wellarchitected:GetAnswer');
    return this;
  }

  /**
   * Grants permission to retrieve the specified lens review of the specified workload
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/start-workflow-review.html
   */
  public toGetLensReview() {
    this.to('wellarchitected:GetLensReview');
    return this;
  }

  /**
   * Grants permission to retrieve the report for the specified lens review
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-report.html
   */
  public toGetLensReviewReport() {
    this.to('wellarchitected:GetLensReviewReport');
    return this;
  }

  /**
   * Grants permission to get the difference between the specified lens version and latest available lens version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-upgrading.html
   */
  public toGetLensVersionDifference() {
    this.to('wellarchitected:GetLensVersionDifference');
    return this;
  }

  /**
   * Grants permission to retrieve the specified milestone of the specified workload
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/milestones-view.html
   */
  public toGetMilestone() {
    this.to('wellarchitected:GetMilestone');
    return this;
  }

  /**
   * Grants permission to retrieve the specified workload
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-page.html
   */
  public toGetWorkload() {
    this.to('wellarchitected:GetWorkload');
    return this;
  }

  /**
   * Grants permission to list the answers from the specified lens review
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/start-workflow-review.html
   */
  public toListAnswers() {
    this.to('wellarchitected:ListAnswers');
    return this;
  }

  /**
   * Grants permission to list the improvements of the specified lens review
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/tutorial-step3.html
   */
  public toListLensReviewImprovements() {
    this.to('wellarchitected:ListLensReviewImprovements');
    return this;
  }

  /**
   * Grants permission to list the lens reviews of the specified workload
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-details.html
   */
  public toListLensReviews() {
    this.to('wellarchitected:ListLensReviews');
    return this;
  }

  /**
   * Grants permission to list the lenses available to this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses.html
   */
  public toListLenses() {
    this.to('wellarchitected:ListLenses');
    return this;
  }

  /**
   * Grants permission to list the milestones of the specified workload
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/details-milestones.html
   */
  public toListMilestones() {
    this.to('wellarchitected:ListMilestones');
    return this;
  }

  /**
   * Grants permission to list notifications related to the account or specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-notifications.html
   */
  public toListNotifications() {
    this.to('wellarchitected:ListNotifications');
    return this;
  }

  /**
   * Grants permission to list the workload share invitations of the specified account or user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/invitations.html
   */
  public toListShareInvitations() {
    this.to('wellarchitected:ListShareInvitations');
    return this;
  }

  /**
   * Grants permission to list the workload shares of the specified workload
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html
   */
  public toListWorkloadShares() {
    this.to('wellarchitected:ListWorkloadShares');
    return this;
  }

  /**
   * Grants permission to list the workloads in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-page.html
   */
  public toListWorkloads() {
    this.to('wellarchitected:ListWorkloads');
    return this;
  }

  /**
   * Grants permission to update properties of the specified answer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/start-workflow-review.html
   */
  public toUpdateAnswer() {
    this.to('wellarchitected:UpdateAnswer');
    return this;
  }

  /**
   * Grants permission to update properties of the specified lens review
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-details.html
   */
  public toUpdateLensReview() {
    this.to('wellarchitected:UpdateLensReview');
    return this;
  }

  /**
   * Grants permission to update status of the specified workload share invitation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workload-sharing.html
   */
  public toUpdateShareInvitation() {
    this.to('wellarchitected:UpdateShareInvitation');
    return this;
  }

  /**
   * Grants permission to update properties of the specified workload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workload-edit.html
   */
  public toUpdateWorkload() {
    this.to('wellarchitected:UpdateWorkload');
    return this;
  }

  /**
   * Grants permission to update properties of the specified workload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workload-sharing.html
   */
  public toUpdateWorkloadShare() {
    this.to('wellarchitected:UpdateWorkloadShare');
    return this;
  }

  /**
   * Grants permission to upgrade the specified lens review to use the latest version of the associated lens
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-upgrading.html
   */
  public toUpgradeLensReview() {
    this.to('wellarchitected:UpgradeLensReview');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateLenses",
      "CreateMilestone",
      "CreateWorkload",
      "CreateWorkloadShare",
      "DeleteWorkload",
      "DeleteWorkloadShare",
      "DisassociateLenses",
      "UpdateAnswer",
      "UpdateLensReview",
      "UpdateShareInvitation",
      "UpdateWorkload",
      "UpdateWorkloadShare",
      "UpgradeLensReview"
    ],
    "Read": [
      "GetAnswer",
      "GetLensReview",
      "GetLensReviewReport",
      "GetLensVersionDifference",
      "GetMilestone",
      "GetWorkload"
    ],
    "List": [
      "ListAnswers",
      "ListLensReviewImprovements",
      "ListLensReviews",
      "ListLenses",
      "ListMilestones",
      "ListNotifications",
      "ListShareInvitations",
      "ListWorkloadShares",
      "ListWorkloads"
    ]
  };

  /**
   * Adds a resource of type workload to the statement
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/iam-auth-access.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWorkload(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:wellarchitected:${Region}:${Account}:workload/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
