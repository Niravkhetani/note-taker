export interface Note {
    id: number;
    title: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    isPinned: boolean;
    tags: string[];
    isArchived: boolean;
    isDeleted: boolean;
    userId: number;
    isPublic: boolean;
    isFeatured: boolean;
    isStarred: boolean;
    isLocked: boolean;

}
