-- CreateTable
CREATE TABLE `Hours` (
    `day` VARCHAR(191) NOT NULL,
    `openTime` VARCHAR(191) NULL,
    `closeTime` VARCHAR(191) NULL,
    `closed` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`day`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
