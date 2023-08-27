import Tag from "./tag";

export default function Tags({ tags, className = null }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {tags.sort().map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
}
