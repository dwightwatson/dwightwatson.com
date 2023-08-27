import Tag from "./tag";

export default function Tags({ tags, className }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {tags.sort().map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
}
