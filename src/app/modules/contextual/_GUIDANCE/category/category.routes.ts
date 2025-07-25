import { Router } from "express";

import { USER_ROLE } from "../../../../core/constants/global.constants";
import auth from "../../../../core/middlewares/auth";
import { AwsUploadSingle } from "../../../../core/middlewares/imageAndDocUploadHelper/awsUpload.single";
import { upload } from "../../../../core/middlewares/imageAndDocUploadHelper/multer.config";
import validateRequest from "../../../../core/middlewares/validateRequest";
import { categoryController } from "./category.controller";
import { categoryValidator } from "./category.validation";

const router = Router();

router.post(
  "/create",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPPER_ADMIN),
  upload.single("image"),
  validateRequest(categoryValidator.createCategoryValidationSchema),
  AwsUploadSingle("image"),
  categoryController.createCategory
);

router.put(
  "/update-scenario/:categoryId",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPPER_ADMIN),
  validateRequest(categoryValidator.updateScenarioInCategory),
  categoryController.updateScenarioInCategory
);

router.put(
  "/:categoryId",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPPER_ADMIN),
  upload.single("image"),
  validateRequest(categoryValidator.updateCategoryValidationSchema),
  AwsUploadSingle("image"),
  categoryController.updateCategory
);

router.delete(
  "/delete/:categoryId",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPPER_ADMIN),
  categoryController.deleteCategory
);

router.get(
  "/",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPPER_ADMIN, USER_ROLE.USER),
  categoryController.getCategory
);

export const categoryRouter = router;
