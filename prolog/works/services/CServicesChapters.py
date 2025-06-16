from works.repositories import ChaptersRepository

class ChaptersService:
    @staticmethod
    def list_chapters_for_work(work_id):
        return ChaptersRepository.get_chapters_by_work(work_id)

    @staticmethod
    def get_chapter_navigation_context(chapter):
        prev_ch = ChaptersRepository.get_previous_chapter(chapter)
        next_ch = ChaptersRepository.get_next_chapter(chapter)

        return {
            "previous_id": prev_ch.id if prev_ch else None,
            "next_id": next_ch.id if next_ch else None
        }