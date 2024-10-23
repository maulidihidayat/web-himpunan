-- DropIndex
DROP INDEX `Chat_member_id_key` ON `chat`;

-- CreateTable
CREATE TABLE `_EventsToMember` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_EventsToMember_AB_unique`(`A`, `B`),
    INDEX `_EventsToMember_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `News` ADD CONSTRAINT `News_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chat` ADD CONSTRAINT `Chat_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EventsToMember` ADD CONSTRAINT `_EventsToMember_A_fkey` FOREIGN KEY (`A`) REFERENCES `Events`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EventsToMember` ADD CONSTRAINT `_EventsToMember_B_fkey` FOREIGN KEY (`B`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
