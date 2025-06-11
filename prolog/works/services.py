from .repositories import get_previous_chapter, get_next_chapter

def get_chapter_navigation_context(chapter):
    prev_ch = get_previous_chapter(chapter)
    next_ch = get_next_chapter(chapter)

    return {
        "previous_id": prev_ch.id if prev_ch else None,
        "next_id": next_ch.id if next_ch else None
    }