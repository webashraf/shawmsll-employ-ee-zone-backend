import { Router } from "express";

import { chatRouter } from "../app/modules/contextual/chat/chat.routes";

import { adminRoute } from "../app/modules/base/admin/admin.routes";
import { authRouter } from "../app/modules/base/auth/auth.routes";
import { plansOrderRoutes } from "../app/modules/contextual/plansOrder/plansOrder.routes";

import { accountDetailsRoute } from "../app/modules/admin/accountDetails/accountDetails.routes";
import { overviewRouter } from "../app/modules/admin/overview/overview.routes";
import { notificationRoute } from "../app/modules/base/notification/notification.routes";
import { subscriptionsRouter } from "../app/modules/base/packages/subscriptions.routes";
import { patRouter } from "../app/modules/base/PrivacyAboutTerms/pat.routes";
import { userRoute } from "../app/modules/base/user/user.routes";
import { communicationToolkitRoute } from "../app/modules/contextual/_COMMUNICATION_TOOLKIT/communication-toolkit/communication-toolkit.route";
import { communicationToolkitCategoryRoute } from "../app/modules/contextual/_COMMUNICATION_TOOLKIT/communicationToolkitCategory/communicationToolkitCategory.route";
import { categoryRouter } from "../app/modules/contextual/_GUIDANCE/category/category.routes";
import { guidance_routes } from "../app/modules/contextual/_GUIDANCE/guidance/guidance.routes";
import { interviewPrep_route } from "../app/modules/contextual/_JOB/interviewPrep/interviewPrep.route";
import { jobSearchCategoryRoute } from "../app/modules/contextual/_JOB/jobSearchCategory/jobSearchCategory.route";
import { resumeTips_route } from "../app/modules/contextual/_JOB/resumeTips/resumeTips.route";
import { tagsRoute } from "../app/modules/contextual/_WORKPLACE_JOURNAL/tags/tags.route";
import { workPlaceJournal_routes } from "../app/modules/contextual/_WORKPLACE_JOURNAL/workPlaceJournal/workPlaceJournal.routes";
import { friend_routes } from "../app/modules/contextual/friend/friend.routes";
import { policyCategoryRoute } from "../app/modules/contextual/policyCategory/policyCategory.route";
import { jobSearchTracker_route } from "../app/modules/contextual/_JOB/jobSearchTracker/jobSearchTracker.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: authRouter,
  },
  { path: "/admin", route: adminRoute },
  {
    path: "/user",
    route: userRoute,
  },

  {
    path: "/subscription",
    route: subscriptionsRouter,
  },
  {
    path: "/payment",
    route: plansOrderRoutes,
  },

  {
    path: "/chat",
    route: chatRouter,
  },
  {
    path: "/pat",
    route: patRouter,
  },
  {
    path: "/overview",
    route: overviewRouter,
  },
  {
    path: "/account-details",
    route: accountDetailsRoute,
  },
  {
    path: "/notification",
    route: notificationRoute,
  },

  {
    path: "/friend",
    route: friend_routes,
  },

  {
    path: "/guidance",
    route: guidance_routes,
  },

  {
    path: "/g-category",
    route: categoryRouter,
  },

  {
    path: "/workplace-journal",
    route: workPlaceJournal_routes,
  },

  {
    path: "/communication-toolkit-category",
    route: communicationToolkitCategoryRoute,
  },

  {
    path: "/communication-toolkit",
    route: communicationToolkitRoute,
  },

  {
    path: "/policy-category",
    route: policyCategoryRoute,
  },

  {
    path: "/workplace-tags",
    route: tagsRoute,
  },

  {
    path: "/job-search-category",
    route: jobSearchCategoryRoute,
  },

  {
    path: "/resume-tips",
    route: resumeTips_route,
  },

  {
    path: "/interview-prep",
    route: interviewPrep_route,
  },

  {
    path: "/job-search-tracker",
    route: jobSearchTracker_route,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export { moduleRoutes };
export default router;
