import { CourseTrayItem } from "../../components/CourseTray/CourseTrayItem";

export const Courses = () => {
  return (
    <div>
      <CourseTrayItem
        title="Django dla początkujących"
        image=""
        author="John Doe"
        rating={4.5}
        ratingAmount={2500}
        tags={["python", "js", "canva"]}
        level={0}
      />
    </div>
  );
};
