/**
 * Tiny HTML templating. Two rules:
 *
 *   1. Everything interpolated into `html` is escaped.
 *   2. Anything the templates produce is already marked safe, so nesting works.
 *
 * That is the whole reason this file exists: escaping by default is what a
 * framework normally buys you, and it costs 25 lines.
 */

const ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ENTITIES[c]);

class Safe {
  constructor(value) {
    this.value = value;
  }
  toString() {
    return this.value;
  }
}

/** Marks a string as already-escaped HTML. Use only on markup you produced. */
export const raw = (value) => new Safe(value);

function render(value) {
  if (value === null || value === undefined || value === false || value === true) return '';
  if (value instanceof Safe) return value.value;
  if (Array.isArray(value)) return value.map(render).join('');
  return escape(value);
}

/** Tagged template that escapes interpolations and returns safe HTML. */
export function html(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i++) out += render(values[i]) + strings[i + 1];
  return raw(out);
}

/** Joins a list of safe fragments. */
export const join = (parts, separator = '') => raw(parts.map(render).join(separator));

/** Renders `attribute="value"` only when the value is present. */
export const attr = (name, value) => (value ? raw(` ${name}="${escape(value)}"`) : raw(''));

/** Serializes an object as JSON safe to embed inside a <script> tag. */
export const jsonScript = (data) => raw(JSON.stringify(data).replace(/</g, '\\u003c'));
