import { useMemo, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { AdminButton } from "@/components/admin/AdminLayout";
import { newId, useStudio } from "@/store/StudioStore";

export type Field<T> = {
  key: keyof T & string;
  label: string;
  type?: "text" | "textarea" | "number";
};

export function CrudPage<T extends { id: string }>({
  singular,
  items,
  fields,
  columns,
  blank,
  onSave,
  onDelete,
  searchKeys,
  filterKey,
  imageKey,
}: {
  singular: string;
  items: T[];
  fields: Field<T>[];
  columns: (keyof T & string)[];
  blank: Omit<T, "id">;
  onSave: (item: T) => void;
  onDelete: (id: string) => void;
  searchKeys: (keyof T & string)[];
  filterKey?: keyof T & string;
  imageKey?: keyof T & string;
}) {
  const { toast } = useStudio();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [draft, setDraft] = useState<T | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const filterValues = useMemo(() => {
    if (!filterKey) return [];
    return ["All", ...Array.from(new Set(items.map((i) => String(i[filterKey]))))];
  }, [items, filterKey]);

  const visible = items.filter((i) => {
    const matchesQuery =
      query.trim() === "" ||
      searchKeys.some((k) => String(i[k]).toLowerCase().includes(query.trim().toLowerCase()));
    const matchesFilter = !filterKey || filter === "All" || String(i[filterKey]) === filter;
    return matchesQuery && matchesFilter;
  });

  const startAdd = () => setDraft({ ...(blank as T), id: newId() });

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${singular.toLowerCase()}s…`}
          aria-label={`Search ${singular}s`}
          className="min-w-0 flex-1 rounded-sm border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-gold"
        />
        {filterKey ? (
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter"
            className="rounded-sm border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-gold"
          >
            {filterValues.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        ) : null}
        <AdminButton onClick={startAdd}>Add {singular}</AdminButton>
      </div>

      <div className="mt-6 overflow-x-auto rounded-sm border border-ink/10 bg-white">
        <table className="w-full min-w-[38rem] text-left text-sm">
          <thead>
            <tr className="border-b border-ink/10 bg-ink/[0.03]">
              {imageKey ? <th className="px-4 py-3" /> : null}
              {columns.map((c) => (
                <th
                  key={c}
                  className="px-4 py-3 text-[0.62rem] uppercase tracking-[0.18em] text-warmgray"
                >
                  {c}
                </th>
              ))}
              <th className="px-4 py-3 text-right text-[0.62rem] uppercase tracking-[0.18em] text-warmgray">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {visible.map((item) => (
              <tr key={item.id} className="border-b border-ink/5 last:border-0">
                {imageKey ? (
                  <td className="px-4 py-3">
                    <img
                      src={String(item[imageKey])}
                      alt=""
                      loading="lazy"
                      className="h-10 w-14 rounded-sm object-cover"
                    />
                  </td>
                ) : null}
                {columns.map((c) => (
                  <td key={c} className="max-w-[16rem] px-4 py-3 text-ink/80">
                    <span className="line-clamp-2">{String(item[c])}</span>
                  </td>
                ))}
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setDraft({ ...item })}
                      className="text-[0.62rem] uppercase tracking-[0.18em] text-ink hover:text-gold"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmId(item.id)}
                      className="text-[0.62rem] uppercase tracking-[0.18em] text-destructive hover:opacity-70"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {visible.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 2} className="px-4 py-10 text-center text-warmgray">
                  Nothing found.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <Modal
        open={!!draft}
        onClose={() => setDraft(null)}
        title={`${items.some((i) => i.id === draft?.id) ? "Edit" : "Add"} ${singular}`}
      >
        {draft ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSave(draft);
              setDraft(null);
              toast(`${singular} saved`);
            }}
            className="flex flex-col gap-4"
          >
            {fields.map((f) => (
              <label key={f.key} className="flex flex-col gap-1.5">
                <span className="text-[0.62rem] uppercase tracking-[0.18em] text-warmgray">
                  {f.label}
                </span>
                {f.type === "textarea" ? (
                  <textarea
                    rows={3}
                    value={String(draft[f.key] ?? "")}
                    onChange={(e) => setDraft({ ...draft, [f.key]: e.target.value })}
                    className="rounded-sm border border-ink/15 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-gold"
                  />
                ) : (
                  <input
                    type={f.type === "number" ? "number" : "text"}
                    value={String(draft[f.key] ?? "")}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        [f.key]: f.type === "number" ? Number(e.target.value) : e.target.value,
                      })
                    }
                    className="rounded-sm border border-ink/15 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-gold"
                  />
                )}
              </label>
            ))}
            <div className="mt-2 flex justify-end gap-3">
              <AdminButton variant="ghost" onClick={() => setDraft(null)}>
                Cancel
              </AdminButton>
              <AdminButton type="submit">Save</AdminButton>
            </div>
          </form>
        ) : null}
      </Modal>

      <Modal open={!!confirmId} onClose={() => setConfirmId(null)} title={`Delete ${singular}?`}>
        <p className="text-sm text-ink/70">
          This removes the {singular.toLowerCase()} from the current session only. Nothing is stored
          in a database.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <AdminButton variant="ghost" onClick={() => setConfirmId(null)}>
            Cancel
          </AdminButton>
          <AdminButton
            variant="danger"
            onClick={() => {
              if (confirmId) onDelete(confirmId);
              setConfirmId(null);
              toast(`${singular} deleted`);
            }}
          >
            Delete
          </AdminButton>
        </div>
      </Modal>
    </>
  );
}
