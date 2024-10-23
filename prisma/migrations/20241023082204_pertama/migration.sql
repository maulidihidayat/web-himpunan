/*
  Warnings:

  - You are about to drop the `chat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `chat` DROP FOREIGN KEY `Chat_member_id_fkey`;

-- DropTable
DROP TABLE `chat`;

-- CreateTable
CREATE TABLE `Chats` (
    `id` VARCHAR(191) NOT NULL,
    `theme` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `member_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Chats` ADD CONSTRAINT `Chats_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
