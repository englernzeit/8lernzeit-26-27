/**
 * Today's Plan checklist component.
 *
 * Items are tappable; checked state persists via checklistStore
 * (localStorage) and is restored on reload. The tick is an inline SVG
 * stroked in `currentColor`, so it lights up in the surrounding view's
 * tint — not a native checkbox (per spec).
 */

import { isChecked, toggle } from "../state/checklistStore.js";

/**
 * @param {Array<{id: string, label: string}>} items
 * @returns {HTMLElement}
 */
export function createChecklist(items) {
  const list = document.createElement("ul");
  list.className = "checklist";

  for (const item of items) {
    const li = document.createElement("li");
    li.className = "checklist__item";
    li.classList.toggle("is-checked", isChecked(item.id));

    const box = document.createElement("span");
    box.className = "checklist__box";
    box.insertAdjacentHTML(
      "beforeend",
      `<svg class="checklist__tick" viewBox="0 0 24 24" aria-hidden="true">
         <path d="M4 13l5 5L20 5" fill="none" stroke="currentColor"
               stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
       </svg>`
    );

    const label = document.createElement("span");
    label.className = "checklist__label";
    label.textContent = item.label;

    li.append(box, label);
    li.addEventListener("click", () => {
      const checked = toggle(item.id);
      li.classList.toggle("is-checked", checked);
    });

    list.appendChild(li);
  }

  return list;
}
