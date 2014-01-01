// Utility functions
const sleep = ms => new Promise(res => setTimeout(res, ms));
// fix promise chain
// add debounce utility
// fix async callback
// add debounce utility
// fix promise chain
// add debounce utility
// add input validation
// add debounce utility
// fix promise chain
// fix promise chain
// refactor event listener
// add local storage helper
// fix promise chain
// improve error handling
// refactor event listener
// add debounce utility
// improve error handling
// fix promise chain
// fix promise chain
// add local storage helper
// add local storage helper
// refactor event listener
// refactor event listener
// fix async callback
// add debounce utility
// add local storage helper
// optimize loop logic
// add local storage helper
// fix promise chain
// add local storage helper
// add input validation
// improve error handling
// improve error handling
// fix promise chain
// add input validation
// fix async callback
// refactor event listener
// improve error handling
// fix promise chain
// optimize loop logic
// improve error handling
// add debounce utility
// improve error handling
// add input validation
// add debounce utility
// fix promise chain
// refactor event listener
// add input validation
// optimize loop logic
// fix promise chain
// add debounce utility
// optimize loop logic
// fix async callback
// add local storage helper
// add debounce utility
// improve error handling
// add local storage helper
// add local storage helper
// add input validation
// fix promise chain
// refactor event listener
// add input validation
// add input validation
// add debounce utility
// improve error handling
// fix async callback
// add debounce utility
// fix promise chain
// optimize loop logic
// fix async callback
// add local storage helper
// refactor event listener
// optimize loop logic
// optimize loop logic
// fix async callback
// add input validation
// optimize loop logic
// fix promise chain
// add local storage helper
// refactor event listener
// add local storage helper
// optimize loop logic
// optimize loop logic
// refactor event listener
// fix async callback
// improve error handling
// optimize loop logic
// add input validation
// add input validation
// add debounce utility
// add input validation
// fix promise chain
// optimize loop logic
// optimize loop logic
// add debounce utility
// improve error handling
// add input validation
// add local storage helper
// improve error handling
// fix promise chain
// add input validation
// optimize loop logic
// fix async callback
// add input validation


const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const getNestedValue = (obj, path, fallback = undefined) =>
  path.split('.').reduce((acc, key) => acc?.[key], obj) ?? fallback;


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((acc, key) => (acc[key] = acc[key] || {}), obj);
  target[last] = value;
  return obj;
};


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


class EventEmitter {
  constructor() { this._events = {}; }
  on(event, listener) {
    (this._events[event] = this._events[event] || []).push(listener);
    return this;
  }
  off(event, listener) {
    this._events[event] = (this._events[event] || []).filter(l => l !== listener);
    return this;
  }
  emit(event, ...args) {
    (this._events[event] || []).forEach(l => l(...args));
    return this;
  }
}


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const unique = (arr) => [...new Set(arr)];


const flatten = (arr, depth = 1) => arr.flat(depth);


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


const unique = (arr) => [...new Set(arr)];


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const flatten = (arr, depth = 1) => arr.flat(depth);


const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((acc, key) => (acc[key] = acc[key] || {}), obj);
  target[last] = value;
  return obj;
};


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const unique = (arr) => [...new Set(arr)];


const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const unique = (arr) => [...new Set(arr)];


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const unique = (arr) => [...new Set(arr)];


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


const compose = (...fns) => (value) => fns.reduceRight((v, fn) => fn(v), value);


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const unique = (arr) => [...new Set(arr)];


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};


const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


const unique = (arr) => [...new Set(arr)];


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


class EventEmitter {
  constructor() { this._events = {}; }
  on(event, listener) {
    (this._events[event] = this._events[event] || []).push(listener);
    return this;
  }
  off(event, listener) {
    this._events[event] = (this._events[event] || []).filter(l => l !== listener);
    return this;
  }
  emit(event, ...args) {
    (this._events[event] || []).forEach(l => l(...args));
    return this;
  }
}


const getNestedValue = (obj, path, fallback = undefined) =>
  path.split('.').reduce((acc, key) => acc?.[key], obj) ?? fallback;


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const retry = async (fn, attempts = 3, delay = 500) => {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === attempts - 1) throw err;
      await sleep(delay * (i + 1));
    }
  }
};


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const getNestedValue = (obj, path, fallback = undefined) =>
  path.split('.').reduce((acc, key) => acc?.[key], obj) ?? fallback;


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((acc, key) => (acc[key] = acc[key] || {}), obj);
  target[last] = value;
  return obj;
};


class EventEmitter {
  constructor() { this._events = {}; }
  on(event, listener) {
    (this._events[event] = this._events[event] || []).push(listener);
    return this;
  }
  off(event, listener) {
    this._events[event] = (this._events[event] || []).filter(l => l !== listener);
    return this;
  }
  emit(event, ...args) {
    (this._events[event] || []).forEach(l => l(...args));
    return this;
  }
}


const unique = (arr) => [...new Set(arr)];


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


class EventEmitter {
  constructor() { this._events = {}; }
  on(event, listener) {
    (this._events[event] = this._events[event] || []).push(listener);
    return this;
  }
  off(event, listener) {
    this._events[event] = (this._events[event] || []).filter(l => l !== listener);
    return this;
  }
  emit(event, ...args) {
    (this._events[event] || []).forEach(l => l(...args));
    return this;
  }
}


const unique = (arr) => [...new Set(arr)];


const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((acc, key) => (acc[key] = acc[key] || {}), obj);
  target[last] = value;
  return obj;
};


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const flatten = (arr, depth = 1) => arr.flat(depth);


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const retry = async (fn, attempts = 3, delay = 500) => {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === attempts - 1) throw err;
      await sleep(delay * (i + 1));
    }
  }
};


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


class EventEmitter {
  constructor() { this._events = {}; }
  on(event, listener) {
    (this._events[event] = this._events[event] || []).push(listener);
    return this;
  }
  off(event, listener) {
    this._events[event] = (this._events[event] || []).filter(l => l !== listener);
    return this;
  }
  emit(event, ...args) {
    (this._events[event] || []).forEach(l => l(...args));
    return this;
  }
}


const unique = (arr) => [...new Set(arr)];


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const compose = (...fns) => (value) => fns.reduceRight((v, fn) => fn(v), value);


const flatten = (arr, depth = 1) => arr.flat(depth);


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const compose = (...fns) => (value) => fns.reduceRight((v, fn) => fn(v), value);


const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));

// [2026-04-12 09:00:00]
// update

// [2026-04-12 11:34:00]
// update

// [2026-04-12 12:51:00]
// update

// [2026-05-10 10:17:00]
// update

// [2026-05-29 10:17:00]
// update

// [2026-04-12 10:17:00]
// update

// [2026-04-20 09:00:00]
// update

// [2026-06-17 09:00:00]
// update

// [2026-07-08 09:00:00]
// update

// [2026-07-08 12:51:00]
// update

// [2026-01-09 09:00:00]
// update

// [2026-03-06 09:00:00]
// update

// [2026-03-27 09:00:00]
// update

// [2026-05-05 10:17:00]
// update

// [2026-05-05 11:34:00]
// update

// [2026-05-17 11:34:00]
// update

// [2026-06-21 10:17:00]
// update

// [2026-07-08 09:00:00]
// update

// [2026-07-18 10:17:00]
// update

// [2026-02-27 09:00:00]
// update

// [2026-05-06 09:00:00]
// update

// [2026-06-08 10:17:00]
// update

// [2026-06-08 11:34:00]
// update

// [2026-07-30 09:00:00]
// update

// [2026-01-12 09:00:00]
// update

// [2026-03-10 09:00:00]
// update

// [2026-03-13 09:00:00]
// update

// [2026-03-22 09:00:00]
// update

// [2026-03-22 11:34:00]
// update

// [2026-03-25 10:17:00]
// update

// [2026-03-29 09:00:00]
// update

// [2026-03-29 10:17:00]
// update

// [2026-04-06 09:00:00]
// update

// [2026-04-06 10:17:00]
// update

// [2026-04-07 09:00:00]
// update

// [2026-04-07 11:34:00]
// update

// [2026-04-23 09:00:00]
// update

// [2026-04-23 11:34:00]
// update

// [2026-04-29 09:00:00]
// update

// [2026-05-18 09:00:00]
// update

// [2026-05-18 10:17:00]
// update

// [2026-05-22 09:00:00]
// update

// [2026-05-22 10:17:00]
// update

// [2026-05-22 11:34:00]
// update

// [2026-06-07 09:00:00]
// update

// [2026-06-07 11:34:00]
// update

// [2026-06-10 09:00:00]
// update

// [2026-06-14 12:51:00]
// update

// [2026-07-12 10:17:00]
// update

// [2026-07-22 09:00:00]
// update

<!-- [2015-01-05 09:00:00] -->
<!-- update -->

<!-- [2015-01-05 10:17:00] -->
<!-- update -->

<!-- [2015-01-08 10:17:00] -->
<!-- update -->

<!-- [2015-01-08 11:34:00] -->
<!-- update -->

<!-- [2015-01-17 11:34:00] -->
<!-- update -->

<!-- [2015-01-18 09:00:00] -->
<!-- update -->

<!-- [2015-01-25 09:00:00] -->
<!-- update -->

<!-- [2015-01-25 10:17:00] -->
<!-- update -->

<!-- [2015-01-28 09:00:00] -->
<!-- update -->

<!-- [2015-01-29 09:00:00] -->
<!-- update -->

<!-- [2015-01-31 09:00:00] -->
<!-- update -->

<!-- [2015-01-31 12:51:00] -->
<!-- update -->

<!-- [2015-02-02 10:17:00] -->
<!-- update -->

<!-- [2015-02-03 10:17:00] -->
<!-- update -->

<!-- [2015-02-03 12:51:00] -->
<!-- update -->

<!-- [2015-02-05 09:00:00] -->
<!-- update -->

<!-- [2015-02-05 13:08:00] -->
<!-- update -->

<!-- [2015-02-07 10:17:00] -->
<!-- update -->

<!-- [2015-02-07 12:51:00] -->
<!-- update -->

<!-- [2015-02-22 09:00:00] -->
<!-- update -->

<!-- [2015-02-22 10:17:00] -->
<!-- update -->

<!-- [2015-02-22 11:34:00] -->
<!-- update -->

<!-- [2015-02-25 11:34:00] -->
<!-- update -->

<!-- [2015-02-26 09:00:00] -->
<!-- update -->

<!-- [2015-03-05 09:00:00] -->
<!-- update -->

<!-- [2015-03-08 09:00:00] -->
<!-- update -->

<!-- [2015-03-11 09:00:00] -->
<!-- update -->

<!-- [2015-03-11 11:34:00] -->
<!-- update -->

<!-- [2015-03-15 09:00:00] -->
<!-- update -->

<!-- [2015-03-15 11:34:00] -->
<!-- update -->

<!-- [2015-03-21 12:51:00] -->
<!-- update -->

<!-- [2015-04-04 09:00:00] -->
<!-- update -->

<!-- [2015-04-04 11:34:00] -->
<!-- update -->

<!-- [2015-04-06 10:17:00] -->
<!-- update -->

<!-- [2015-04-06 11:34:00] -->
<!-- update -->

<!-- [2015-04-08 09:00:00] -->
<!-- update -->

<!-- [2015-04-14 09:00:00] -->
<!-- update -->

<!-- [2015-04-14 10:17:00] -->
<!-- update -->

<!-- [2015-04-14 11:34:00] -->
<!-- update -->

<!-- [2015-04-14 12:51:00] -->
<!-- update -->

<!-- [2015-04-28 09:00:00] -->
<!-- update -->

<!-- [2015-04-28 11:34:00] -->
<!-- update -->

<!-- [2015-04-28 13:08:00] -->
<!-- update -->

<!-- [2015-05-13 09:00:00] -->
<!-- update -->

<!-- [2015-05-20 09:00:00] -->
<!-- update -->

<!-- [2015-05-24 12:51:00] -->
<!-- update -->

<!-- [2015-05-28 10:17:00] -->
<!-- update -->

<!-- [2015-05-30 09:00:00] -->
<!-- update -->

<!-- [2015-05-30 11:34:00] -->
<!-- update -->

<!-- [2015-06-07 09:00:00] -->
<!-- update -->

<!-- [2015-06-07 10:17:00] -->
<!-- update -->

<!-- [2015-06-08 09:00:00] -->
<!-- update -->

<!-- [2015-06-08 10:17:00] -->
<!-- update -->

<!-- [2015-06-08 11:34:00] -->
<!-- update -->

<!-- [2015-06-09 09:00:00] -->
<!-- update -->

<!-- [2015-06-10 10:17:00] -->
<!-- update -->

<!-- [2015-06-11 09:00:00] -->
<!-- update -->

<!-- [2015-06-11 10:17:00] -->
<!-- update -->

<!-- [2015-06-21 09:00:00] -->
<!-- update -->

<!-- [2015-06-21 11:34:00] -->
<!-- update -->

<!-- [2015-06-24 09:00:00] -->
<!-- update -->

<!-- [2015-06-24 10:17:00] -->
<!-- update -->

<!-- [2015-06-28 09:00:00] -->
<!-- update -->

<!-- [2015-06-28 11:34:00] -->
<!-- update -->

<!-- [2015-06-30 09:00:00] -->
<!-- update -->

<!-- [2015-07-07 10:17:00] -->
<!-- update -->

<!-- [2015-07-09 10:17:00] -->
<!-- update -->

<!-- [2015-07-19 10:17:00] -->
<!-- update -->

<!-- [2015-07-19 12:51:00] -->
<!-- update -->

<!-- [2015-07-19 14:25:00] -->
<!-- update -->

<!-- [2015-07-21 12:51:00] -->
<!-- update -->

<!-- [2015-07-21 14:25:00] -->
<!-- update -->

<!-- [2015-07-23 13:08:00] -->
<!-- update -->

<!-- [2015-07-24 11:34:00] -->
<!-- update -->

<!-- [2015-07-24 12:51:00] -->
<!-- update -->

<!-- [2015-07-24 13:08:00] -->
<!-- update -->

<!-- [2015-07-29 09:00:00] -->
<!-- update -->

<!-- [2015-07-31 09:00:00] -->
<!-- update -->

<!-- [2015-07-31 10:17:00] -->
<!-- update -->

<!-- [2015-08-07 09:00:00] -->
<!-- update -->

<!-- [2015-08-18 09:00:00] -->
<!-- update -->

<!-- [2015-08-18 10:17:00] -->
<!-- update -->

<!-- [2015-08-25 09:00:00] -->
<!-- update -->

<!-- [2015-08-25 11:34:00] -->
<!-- update -->

<!-- [2015-08-26 09:00:00] -->
<!-- update -->

<!-- [2015-08-26 12:51:00] -->
<!-- update -->

<!-- [2015-09-02 09:00:00] -->
<!-- update -->

<!-- [2015-09-08 09:00:00] -->
<!-- update -->

<!-- [2015-09-12 09:00:00] -->
<!-- update -->

<!-- [2015-09-12 10:17:00] -->
<!-- update -->

<!-- [2015-09-23 10:17:00] -->
<!-- update -->

<!-- [2015-09-24 09:00:00] -->
<!-- update -->

<!-- [2015-10-07 11:34:00] -->
<!-- update -->

<!-- [2015-10-08 09:00:00] -->
<!-- update -->

<!-- [2015-10-08 10:17:00] -->
<!-- update -->

<!-- [2015-10-08 11:34:00] -->
<!-- update -->

<!-- [2015-10-08 12:51:00] -->
<!-- update -->

<!-- [2015-10-09 09:00:00] -->
<!-- update -->

<!-- [2015-10-16 11:34:00] -->
<!-- update -->

<!-- [2015-10-16 12:51:00] -->
<!-- update -->

<!-- [2015-10-22 13:08:00] -->
<!-- update -->

<!-- [2015-10-22 14:25:00] -->
<!-- update -->

<!-- [2015-10-24 10:17:00] -->
<!-- update -->

<!-- [2015-10-28 09:00:00] -->
<!-- update -->

<!-- [2015-10-28 11:34:00] -->
<!-- update -->

<!-- [2015-11-04 09:00:00] -->
<!-- update -->

<!-- [2015-11-05 10:17:00] -->
<!-- update -->

<!-- [2015-12-24 09:00:00] -->
<!-- update -->

<!-- [2015-12-25 09:00:00] -->
<!-- update -->

<!-- [2015-12-31 09:00:00] -->
<!-- update -->

<!-- [2016-01-04 10:17:00] -->
<!-- update -->

<!-- [2016-01-04 13:08:00] -->
<!-- update -->

<!-- [2016-01-09 10:17:00] -->
<!-- update -->

<!-- [2016-01-12 09:00:00] -->
<!-- update -->

<!-- [2016-01-17 12:51:00] -->
<!-- update -->

<!-- [2016-01-18 09:00:00] -->
<!-- update -->

<!-- [2016-01-25 09:00:00] -->
<!-- update -->

<!-- [2016-01-27 10:17:00] -->
<!-- update -->

<!-- [2016-01-27 12:51:00] -->
<!-- update -->

<!-- [2016-01-31 10:17:00] -->
<!-- update -->

<!-- [2016-01-31 11:34:00] -->
<!-- update -->

<!-- [2016-02-05 12:51:00] -->
<!-- update -->

<!-- [2016-02-06 09:00:00] -->
<!-- update -->

<!-- [2016-02-06 10:17:00] -->
<!-- update -->

<!-- [2016-02-09 09:00:00] -->
<!-- update -->

<!-- [2016-02-25 09:00:00] -->
<!-- update -->

<!-- [2016-02-27 09:00:00] -->
<!-- update -->

<!-- [2016-02-27 10:17:00] -->
<!-- update -->

<!-- [2016-02-27 11:34:00] -->
<!-- update -->

<!-- [2016-02-28 09:00:00] -->
<!-- update -->

<!-- [2016-02-28 10:17:00] -->
<!-- update -->

<!-- [2016-02-28 11:34:00] -->
<!-- update -->

<!-- [2016-02-29 10:17:00] -->
<!-- update -->

<!-- [2016-02-29 11:34:00] -->
<!-- update -->

<!-- [2016-02-29 12:51:00] -->
<!-- update -->

<!-- [2016-02-29 13:08:00] -->
<!-- update -->

<!-- [2016-03-01 10:17:00] -->
<!-- update -->

<!-- [2016-03-01 13:08:00] -->
<!-- update -->

<!-- [2016-03-06 10:17:00] -->
<!-- update -->

<!-- [2016-03-06 12:51:00] -->
<!-- update -->

<!-- [2016-03-08 11:34:00] -->
<!-- update -->

<!-- [2016-03-11 10:17:00] -->
<!-- update -->

<!-- [2016-03-11 11:34:00] -->
<!-- update -->

<!-- [2016-03-11 12:51:00] -->
<!-- update -->

<!-- [2016-03-12 09:00:00] -->
<!-- update -->

<!-- [2016-03-15 09:00:00] -->
<!-- update -->

<!-- [2016-03-19 09:00:00] -->
<!-- update -->

<!-- [2016-03-19 10:17:00] -->
<!-- update -->

<!-- [2016-03-21 12:51:00] -->
<!-- update -->

<!-- [2016-03-21 13:08:00] -->
<!-- update -->

<!-- [2016-03-23 09:00:00] -->
<!-- update -->

<!-- [2016-03-23 10:17:00] -->
<!-- update -->

<!-- [2016-03-25 09:00:00] -->
<!-- update -->

<!-- [2016-03-25 11:34:00] -->
<!-- update -->

<!-- [2016-03-25 13:08:00] -->
<!-- update -->

<!-- [2016-03-26 10:17:00] -->
<!-- update -->

<!-- [2016-03-26 11:34:00] -->
<!-- update -->

<!-- [2016-03-26 13:08:00] -->
<!-- update -->

<!-- [2016-03-26 14:25:00] -->
<!-- update -->

<!-- [2016-04-02 09:00:00] -->
<!-- update -->

<!-- [2016-04-02 11:34:00] -->
<!-- update -->

<!-- [2016-04-02 12:51:00] -->
<!-- update -->

<!-- [2016-04-09 09:00:00] -->
<!-- update -->

<!-- [2016-04-09 11:34:00] -->
<!-- update -->

<!-- [2016-04-10 09:00:00] -->
<!-- update -->

<!-- [2016-04-15 09:00:00] -->
<!-- update -->

<!-- [2016-04-18 11:34:00] -->
<!-- update -->

<!-- [2016-04-19 11:34:00] -->
<!-- update -->

<!-- [2016-04-19 12:51:00] -->
<!-- update -->

<!-- [2016-04-19 13:08:00] -->
<!-- update -->

<!-- [2016-04-27 10:17:00] -->
<!-- update -->

<!-- [2016-05-04 10:17:00] -->
<!-- update -->

<!-- [2016-05-04 11:34:00] -->
<!-- update -->

<!-- [2016-05-06 09:00:00] -->
<!-- update -->

<!-- [2016-05-15 11:34:00] -->
<!-- update -->

<!-- [2016-05-15 12:51:00] -->
<!-- update -->

<!-- [2016-05-18 09:00:00] -->
<!-- update -->

<!-- [2016-05-18 10:17:00] -->
<!-- update -->

<!-- [2016-05-18 11:34:00] -->
<!-- update -->

<!-- [2016-05-20 10:17:00] -->
<!-- update -->

<!-- [2016-05-23 09:00:00] -->
<!-- update -->

<!-- [2016-05-26 09:00:00] -->
<!-- update -->

<!-- [2016-05-27 09:00:00] -->
<!-- update -->

<!-- [2016-05-28 10:17:00] -->
<!-- update -->

<!-- [2016-06-12 09:00:00] -->
<!-- update -->

<!-- [2016-06-14 11:34:00] -->
<!-- update -->

<!-- [2016-06-15 09:00:00] -->
<!-- update -->

<!-- [2016-06-15 11:34:00] -->
<!-- update -->

<!-- [2016-06-15 12:51:00] -->
<!-- update -->

<!-- [2016-06-17 09:00:00] -->
<!-- update -->

<!-- [2016-06-17 11:34:00] -->
<!-- update -->

<!-- [2016-06-24 09:00:00] -->
<!-- update -->

<!-- [2016-06-25 11:34:00] -->
<!-- update -->

<!-- [2016-06-25 12:51:00] -->
<!-- update -->

<!-- [2016-06-25 13:08:00] -->
<!-- update -->

<!-- [2016-06-26 09:00:00] -->
<!-- update -->

<!-- [2016-06-26 10:17:00] -->
<!-- update -->

<!-- [2016-06-26 13:08:00] -->
<!-- update -->

<!-- [2016-06-27 09:00:00] -->
<!-- update -->

<!-- [2016-06-27 10:17:00] -->
<!-- update -->

<!-- [2016-06-30 09:00:00] -->
<!-- update -->

<!-- [2016-06-30 10:17:00] -->
<!-- update -->

<!-- [2016-07-01 11:34:00] -->
<!-- update -->

<!-- [2016-07-06 09:00:00] -->
<!-- update -->

<!-- [2016-07-09 12:51:00] -->
<!-- update -->

<!-- [2016-07-14 09:00:00] -->
<!-- update -->

<!-- [2016-07-19 09:00:00] -->
<!-- update -->

<!-- [2016-07-26 09:00:00] -->
<!-- update -->

<!-- [2016-07-26 10:17:00] -->
<!-- update -->

<!-- [2016-07-29 11:34:00] -->
<!-- update -->

<!-- [2016-08-07 09:00:00] -->
<!-- update -->

<!-- [2016-08-07 11:34:00] -->
<!-- update -->

<!-- [2016-08-07 13:08:00] -->
<!-- update -->

<!-- [2016-08-11 09:00:00] -->
<!-- update -->

<!-- [2016-08-13 11:34:00] -->
<!-- update -->

<!-- [2016-08-22 12:51:00] -->
<!-- update -->

<!-- [2016-08-30 09:00:00] -->
<!-- update -->

<!-- [2016-09-01 10:17:00] -->
<!-- update -->

<!-- [2016-09-01 11:34:00] -->
<!-- update -->

<!-- [2016-09-02 10:17:00] -->
<!-- update -->

<!-- [2016-09-02 11:34:00] -->
<!-- update -->

<!-- [2016-09-06 09:00:00] -->
<!-- update -->

<!-- [2016-09-16 12:51:00] -->
<!-- update -->

<!-- [2016-09-19 10:17:00] -->
<!-- update -->

<!-- [2016-09-19 11:34:00] -->
<!-- update -->

<!-- [2016-09-19 12:51:00] -->
<!-- update -->

<!-- [2016-09-20 09:00:00] -->
<!-- update -->

<!-- [2016-09-20 10:17:00] -->
<!-- update -->

<!-- [2016-09-24 09:00:00] -->
<!-- update -->

<!-- [2016-10-03 09:00:00] -->
<!-- update -->

<!-- [2016-10-04 11:34:00] -->
<!-- update -->

<!-- [2016-10-08 09:00:00] -->
<!-- update -->

<!-- [2016-10-09 09:00:00] -->
<!-- update -->

<!-- [2016-10-09 10:17:00] -->
<!-- update -->

<!-- [2016-10-16 09:00:00] -->
<!-- update -->

<!-- [2016-10-16 10:17:00] -->
<!-- update -->

<!-- [2016-10-16 11:34:00] -->
<!-- update -->

<!-- [2016-10-18 09:00:00] -->
<!-- update -->

<!-- [2016-10-22 11:34:00] -->
<!-- update -->

<!-- [2016-10-30 10:17:00] -->
<!-- update -->

<!-- [2016-10-30 11:34:00] -->
<!-- update -->

<!-- [2016-10-30 12:51:00] -->
<!-- update -->

<!-- [2016-11-07 09:00:00] -->
<!-- update -->

<!-- [2016-11-09 09:00:00] -->
<!-- update -->

<!-- [2016-11-10 09:00:00] -->
<!-- update -->

<!-- [2016-11-20 09:00:00] -->
<!-- update -->

<!-- [2016-11-25 09:00:00] -->
<!-- update -->

<!-- [2016-11-27 09:00:00] -->
<!-- update -->

<!-- [2016-11-27 10:17:00] -->
<!-- update -->

<!-- [2016-11-29 10:17:00] -->
<!-- update -->

<!-- [2016-11-29 11:34:00] -->
<!-- update -->

<!-- [2016-11-29 12:51:00] -->
<!-- update -->

<!-- [2016-11-30 10:17:00] -->
<!-- update -->

<!-- [2016-12-01 10:17:00] -->
<!-- update -->

<!-- [2016-12-01 11:34:00] -->
<!-- update -->

<!-- [2016-12-01 12:51:00] -->
<!-- update -->

<!-- [2016-12-01 13:08:00] -->
<!-- update -->

<!-- [2016-12-01 14:25:00] -->
<!-- update -->

<!-- [2016-12-05 10:17:00] -->
<!-- update -->

<!-- [2016-12-16 09:00:00] -->
<!-- update -->

<!-- [2016-12-26 10:17:00] -->
<!-- update -->

<!-- [2016-12-26 11:34:00] -->
<!-- update -->

<!-- [2016-12-26 12:51:00] -->
<!-- update -->

<!-- [2016-12-28 09:00:00] -->
<!-- update -->

<!-- [2016-12-29 10:17:00] -->
<!-- update -->

<!-- [2016-12-30 09:00:00] -->
<!-- update -->

<!-- [2016-12-30 10:17:00] -->
<!-- update -->

<!-- [2016-12-30 12:51:00] -->
<!-- update -->

<!-- [2015-01-26 09:00:00] -->
<!-- update -->

<!-- [2015-01-26 10:17:00] -->
<!-- update -->

<!-- [2015-01-26 12:51:00] -->
<!-- update -->

<!-- [2015-01-30 10:17:00] -->
<!-- update -->

<!-- [2015-01-30 11:34:00] -->
<!-- update -->

<!-- [2015-02-03 10:17:00] -->
<!-- update -->

<!-- [2015-02-03 11:34:00] -->
<!-- update -->

<!-- [2015-02-03 12:51:00] -->
<!-- update -->

<!-- [2015-02-03 13:08:00] -->
<!-- update -->

<!-- [2015-02-18 09:00:00] -->
<!-- update -->

<!-- [2015-02-18 10:17:00] -->
<!-- update -->

<!-- [2015-02-18 11:34:00] -->
<!-- update -->

<!-- [2015-02-18 12:51:00] -->
<!-- update -->

<!-- [2015-02-18 13:08:00] -->
<!-- update -->

<!-- [2015-02-20 09:00:00] -->
<!-- update -->

<!-- [2015-02-20 10:17:00] -->
<!-- update -->

<!-- [2015-02-20 12:51:00] -->
<!-- update -->

<!-- [2015-03-03 10:17:00] -->
<!-- update -->

<!-- [2015-03-03 11:34:00] -->
<!-- update -->

<!-- [2015-03-05 09:00:00] -->
<!-- update -->

<!-- [2015-03-19 11:34:00] -->
<!-- update -->

<!-- [2015-03-27 10:17:00] -->
<!-- update -->

<!-- [2015-03-31 09:00:00] -->
<!-- update -->

<!-- [2015-04-06 09:00:00] -->
<!-- update -->

<!-- [2015-04-07 09:00:00] -->
<!-- update -->

<!-- [2015-04-14 11:34:00] -->
<!-- update -->

<!-- [2015-04-14 12:51:00] -->
<!-- update -->

<!-- [2015-04-14 13:08:00] -->
<!-- update -->

<!-- [2015-04-14 14:25:00] -->
<!-- update -->

<!-- [2015-04-15 12:51:00] -->
<!-- update -->

<!-- [2015-04-28 11:34:00] -->
<!-- update -->

<!-- [2015-05-01 09:00:00] -->
<!-- update -->

<!-- [2015-05-04 09:00:00] -->
<!-- update -->

<!-- [2015-05-13 09:00:00] -->
<!-- update -->

<!-- [2015-05-22 09:00:00] -->
<!-- update -->

<!-- [2015-05-25 09:00:00] -->
<!-- update -->

<!-- [2015-05-25 10:17:00] -->
<!-- update -->

<!-- [2015-06-01 10:17:00] -->
<!-- update -->

<!-- [2015-06-02 10:17:00] -->
<!-- update -->

<!-- [2015-06-02 11:34:00] -->
<!-- update -->

<!-- [2015-06-02 13:08:00] -->
<!-- update -->

<!-- [2015-06-02 14:25:00] -->
<!-- update -->

<!-- [2015-06-04 10:17:00] -->
<!-- update -->

<!-- [2015-06-24 10:17:00] -->
<!-- update -->

<!-- [2015-07-07 11:34:00] -->
<!-- update -->

<!-- [2015-07-23 09:00:00] -->
<!-- update -->

<!-- [2015-07-27 09:00:00] -->
<!-- update -->

<!-- [2015-08-02 09:00:00] -->
<!-- update -->

<!-- [2015-08-06 09:00:00] -->
<!-- update -->

<!-- [2015-08-06 10:17:00] -->
<!-- update -->

<!-- [2015-08-07 12:51:00] -->
<!-- update -->

<!-- [2015-08-12 11:34:00] -->
<!-- update -->

<!-- [2015-08-13 09:00:00] -->
<!-- update -->

<!-- [2015-08-27 11:34:00] -->
<!-- update -->

<!-- [2015-09-19 09:00:00] -->
<!-- update -->

<!-- [2015-10-05 09:00:00] -->
<!-- update -->

<!-- [2015-10-05 10:17:00] -->
<!-- update -->

<!-- [2015-10-08 09:00:00] -->
<!-- update -->

<!-- [2015-10-08 10:17:00] -->
<!-- update -->

<!-- [2015-10-15 09:00:00] -->
<!-- update -->

<!-- [2015-10-20 09:00:00] -->
<!-- update -->

<!-- [2015-10-20 11:34:00] -->
<!-- update -->

<!-- [2015-11-05 09:00:00] -->
<!-- update -->

<!-- [2015-11-05 11:34:00] -->
<!-- update -->

<!-- [2015-11-15 09:00:00] -->
<!-- update -->

<!-- [2015-11-16 10:17:00] -->
<!-- update -->

<!-- [2015-11-16 11:34:00] -->
<!-- update -->

<!-- [2016-01-12 10:17:00] -->
<!-- update -->

<!-- [2016-01-12 11:34:00] -->
<!-- update -->

<!-- [2016-01-13 10:17:00] -->
<!-- update -->

<!-- [2016-01-13 11:34:00] -->
<!-- update -->

<!-- [2016-01-14 09:00:00] -->
<!-- update -->

<!-- [2016-01-15 10:17:00] -->
<!-- update -->

<!-- [2016-01-18 09:00:00] -->
<!-- update -->

<!-- [2016-01-28 10:17:00] -->
<!-- update -->

<!-- [2016-01-29 10:17:00] -->
<!-- update -->

<!-- [2016-02-08 09:00:00] -->
<!-- update -->

<!-- [2016-02-08 10:17:00] -->
<!-- update -->

<!-- [2016-02-08 11:34:00] -->
<!-- update -->

<!-- [2016-02-10 09:00:00] -->
<!-- update -->

<!-- [2016-02-23 09:00:00] -->
<!-- update -->

<!-- [2016-02-23 10:17:00] -->
<!-- update -->

<!-- [2016-02-25 09:00:00] -->
<!-- update -->

<!-- [2016-02-25 10:17:00] -->
<!-- update -->

<!-- [2016-02-25 11:34:00] -->
<!-- update -->

<!-- [2016-03-08 10:17:00] -->
<!-- update -->

<!-- [2016-03-10 12:51:00] -->
<!-- update -->

<!-- [2016-04-06 09:00:00] -->
<!-- update -->

<!-- [2016-04-06 10:17:00] -->
<!-- update -->

<!-- [2016-04-21 10:17:00] -->
<!-- update -->

<!-- [2016-05-03 10:17:00] -->
<!-- update -->

<!-- [2016-05-03 12:51:00] -->
<!-- update -->

<!-- [2016-05-03 13:08:00] -->
<!-- update -->

<!-- [2016-05-06 09:00:00] -->
<!-- update -->

<!-- [2016-05-06 10:17:00] -->
<!-- update -->

<!-- [2016-05-06 12:51:00] -->
<!-- update -->

<!-- [2016-05-06 13:08:00] -->
<!-- update -->

<!-- [2016-05-17 09:00:00] -->
<!-- update -->

<!-- [2016-05-17 10:17:00] -->
<!-- update -->

<!-- [2016-05-17 11:34:00] -->
<!-- update -->

<!-- [2016-05-17 12:51:00] -->
<!-- update -->

<!-- [2016-05-30 10:17:00] -->
<!-- update -->

<!-- [2016-05-31 09:00:00] -->
<!-- update -->

<!-- [2016-05-31 11:34:00] -->
<!-- update -->

<!-- [2016-06-14 10:17:00] -->
<!-- update -->

<!-- [2016-06-14 11:34:00] -->
<!-- update -->

<!-- [2016-06-14 12:51:00] -->
<!-- update -->

<!-- [2016-06-15 10:17:00] -->
<!-- update -->

<!-- [2016-06-16 09:00:00] -->
<!-- update -->

<!-- [2016-06-16 11:34:00] -->
<!-- update -->

<!-- [2016-06-17 09:00:00] -->
<!-- update -->

<!-- [2016-06-17 10:17:00] -->
<!-- update -->

<!-- [2016-06-17 11:34:00] -->
<!-- update -->

<!-- [2016-06-27 09:00:00] -->
<!-- update -->

<!-- [2016-06-28 10:17:00] -->
<!-- update -->

<!-- [2016-06-28 11:34:00] -->
<!-- update -->

<!-- [2016-06-29 09:00:00] -->
<!-- update -->

<!-- [2016-06-29 10:17:00] -->
<!-- update -->

<!-- [2016-06-30 09:00:00] -->
<!-- update -->

<!-- [2016-06-30 11:34:00] -->
<!-- update -->

<!-- [2016-07-11 09:00:00] -->
<!-- update -->

<!-- [2016-07-20 09:00:00] -->
<!-- update -->

<!-- [2016-07-22 09:00:00] -->
<!-- update -->

<!-- [2016-07-22 10:17:00] -->
<!-- update -->

<!-- [2016-07-25 11:34:00] -->
<!-- update -->

<!-- [2016-07-25 13:08:00] -->
<!-- update -->

<!-- [2016-08-08 11:34:00] -->
<!-- update -->

<!-- [2016-08-09 11:34:00] -->
<!-- update -->

<!-- [2016-08-19 09:00:00] -->
<!-- update -->

<!-- [2016-08-19 10:17:00] -->
<!-- update -->

<!-- [2016-08-19 11:34:00] -->
<!-- update -->

<!-- [2016-08-23 09:00:00] -->
<!-- update -->

<!-- [2016-08-23 12:51:00] -->
<!-- update -->

<!-- [2016-08-23 13:08:00] -->
<!-- update -->

<!-- [2016-08-25 10:17:00] -->
<!-- update -->

<!-- [2016-09-02 09:00:00] -->
<!-- update -->

<!-- [2016-09-22 09:00:00] -->
<!-- update -->

<!-- [2016-09-22 10:17:00] -->
<!-- update -->

<!-- [2016-09-25 09:00:00] -->
<!-- update -->

<!-- [2016-09-30 09:00:00] -->
<!-- update -->

<!-- [2016-09-30 11:34:00] -->
<!-- update -->

<!-- [2016-10-18 09:00:00] -->
<!-- update -->

<!-- [2016-10-18 11:34:00] -->
<!-- update -->

<!-- [2016-10-18 12:51:00] -->
<!-- update -->

<!-- [2016-10-20 11:34:00] -->
<!-- update -->

<!-- [2016-11-03 09:00:00] -->
<!-- update -->

<!-- [2016-11-03 10:17:00] -->
<!-- update -->

<!-- [2016-12-01 09:00:00] -->
<!-- update -->

<!-- [2016-12-06 09:00:00] -->
<!-- update -->

<!-- [2016-12-09 09:00:00] -->
<!-- update -->

<!-- [2016-12-09 11:34:00] -->
<!-- update -->

<!-- [2015-01-27 09:00:00] -->
<!-- update -->

<!-- [2015-01-27 10:17:00] -->
<!-- update -->

<!-- [2015-01-28 09:00:00] -->
<!-- update -->

<!-- [2015-01-28 12:51:00] -->
<!-- update -->

<!-- [2015-02-09 10:17:00] -->
<!-- update -->

<!-- [2015-02-10 09:00:00] -->
<!-- update -->

<!-- [2015-02-11 10:17:00] -->
<!-- update -->

<!-- [2015-02-11 11:34:00] -->
<!-- update -->

<!-- [2015-03-10 10:17:00] -->
<!-- update -->

<!-- [2015-03-11 11:34:00] -->
<!-- update -->

<!-- [2015-03-11 14:25:00] -->
<!-- update -->

<!-- [2015-03-13 10:17:00] -->
<!-- update -->

<!-- [2015-03-18 10:17:00] -->
<!-- update -->

<!-- [2015-03-23 09:00:00] -->
<!-- update -->

<!-- [2015-04-03 09:00:00] -->
<!-- update -->

<!-- [2015-04-07 12:51:00] -->
<!-- update -->

<!-- [2015-04-07 14:25:00] -->
<!-- update -->

<!-- [2015-04-09 09:00:00] -->
<!-- update -->

<!-- [2015-04-09 11:34:00] -->
<!-- update -->

<!-- [2015-04-10 10:17:00] -->
<!-- update -->

<!-- [2015-04-10 11:34:00] -->
<!-- update -->

<!-- [2015-04-14 09:00:00] -->
<!-- update -->

<!-- [2015-04-14 12:51:00] -->
<!-- update -->

<!-- [2015-04-23 10:17:00] -->
<!-- update -->

<!-- [2015-04-23 11:34:00] -->
<!-- update -->

<!-- [2015-05-25 09:00:00] -->
<!-- update -->

<!-- [2015-05-26 09:00:00] -->
<!-- update -->

<!-- [2015-06-09 09:00:00] -->
<!-- update -->

<!-- [2015-06-11 09:00:00] -->
<!-- update -->

<!-- [2015-06-17 10:17:00] -->
<!-- update -->

<!-- [2015-06-17 11:34:00] -->
<!-- update -->

<!-- [2015-06-22 09:00:00] -->
<!-- update -->

<!-- [2015-06-22 11:34:00] -->
<!-- update -->

<!-- [2015-06-30 11:34:00] -->
<!-- update -->

<!-- [2015-07-28 09:00:00] -->
<!-- update -->

<!-- [2015-07-28 11:34:00] -->
<!-- update -->

<!-- [2015-07-30 10:17:00] -->
<!-- update -->

<!-- [2015-07-30 11:34:00] -->
<!-- update -->

<!-- [2015-07-30 13:08:00] -->
<!-- update -->

<!-- [2015-07-30 14:25:00] -->
<!-- update -->

<!-- [2015-08-17 10:17:00] -->
<!-- update -->

<!-- [2015-08-17 11:34:00] -->
<!-- update -->

<!-- [2015-08-19 09:00:00] -->
<!-- update -->

<!-- [2015-08-20 09:00:00] -->
<!-- update -->

<!-- [2015-08-20 10:17:00] -->
<!-- update -->

<!-- [2015-08-21 10:17:00] -->
<!-- update -->

<!-- [2015-09-02 09:00:00] -->
<!-- update -->

<!-- [2015-09-03 09:00:00] -->
<!-- update -->

<!-- [2015-09-07 09:00:00] -->
<!-- update -->

<!-- [2015-09-07 10:17:00] -->
<!-- update -->

<!-- [2015-09-07 11:34:00] -->
<!-- update -->

<!-- [2015-09-10 09:00:00] -->
<!-- update -->

<!-- [2015-09-11 09:00:00] -->
<!-- update -->

<!-- [2015-09-11 10:17:00] -->
<!-- update -->

<!-- [2015-09-11 11:34:00] -->
<!-- update -->

<!-- [2015-09-17 09:00:00] -->
<!-- update -->

<!-- [2015-09-30 11:34:00] -->
<!-- update -->

<!-- [2015-09-30 12:51:00] -->
<!-- update -->

<!-- [2015-10-07 11:34:00] -->
<!-- update -->

<!-- [2015-10-15 11:34:00] -->
<!-- update -->

<!-- [2015-10-15 12:51:00] -->
<!-- update -->

<!-- [2015-10-16 10:17:00] -->
<!-- update -->

<!-- [2015-10-16 11:34:00] -->
<!-- update -->

<!-- [2015-10-16 12:51:00] -->
<!-- update -->

<!-- [2015-10-30 10:17:00] -->
<!-- update -->

<!-- [2015-10-30 12:51:00] -->
<!-- update -->

<!-- [2015-11-03 11:34:00] -->
<!-- update -->

<!-- [2015-11-05 11:34:00] -->
<!-- update -->

<!-- [2015-11-05 12:51:00] -->
<!-- update -->

<!-- [2015-11-13 09:00:00] -->
<!-- update -->

<!-- [2015-11-13 11:34:00] -->
<!-- update -->

<!-- [2015-12-02 09:00:00] -->
<!-- update -->

<!-- [2016-01-15 09:00:00] -->
<!-- update -->

<!-- [2016-01-15 12:51:00] -->
<!-- update -->

<!-- [2016-01-18 10:17:00] -->
<!-- update -->

<!-- [2016-01-18 11:34:00] -->
<!-- update -->

<!-- [2016-01-20 11:34:00] -->
<!-- update -->

<!-- [2016-01-20 13:08:00] -->
<!-- update -->

<!-- [2016-01-29 09:00:00] -->
<!-- update -->

<!-- [2016-02-10 09:00:00] -->
<!-- update -->

<!-- [2016-02-10 10:17:00] -->
<!-- update -->

<!-- [2016-02-11 11:34:00] -->
<!-- update -->

<!-- [2016-02-12 09:00:00] -->
<!-- update -->

<!-- [2016-02-12 10:17:00] -->
<!-- update -->

<!-- [2016-02-12 11:34:00] -->
<!-- update -->

<!-- [2016-02-25 09:00:00] -->
<!-- update -->

<!-- [2016-02-25 10:17:00] -->
<!-- update -->

<!-- [2016-03-11 10:17:00] -->
<!-- update -->

<!-- [2016-03-11 11:34:00] -->
<!-- update -->

<!-- [2016-03-21 11:34:00] -->
<!-- update -->

<!-- [2016-03-23 12:51:00] -->
<!-- update -->

<!-- [2016-03-23 13:08:00] -->
<!-- update -->

<!-- [2016-03-28 09:00:00] -->
<!-- update -->

<!-- [2016-03-28 10:17:00] -->
<!-- update -->

<!-- [2016-03-28 11:34:00] -->
<!-- update -->

<!-- [2016-03-28 13:08:00] -->
<!-- update -->

<!-- [2016-03-28 14:25:00] -->
<!-- update -->

<!-- [2016-04-01 10:17:00] -->
<!-- update -->

<!-- [2016-04-01 11:34:00] -->
<!-- update -->

<!-- [2016-04-01 12:51:00] -->
<!-- update -->

<!-- [2016-04-21 09:00:00] -->
<!-- update -->

<!-- [2016-04-21 10:17:00] -->
<!-- update -->

<!-- [2016-04-22 11:34:00] -->
<!-- update -->

<!-- [2016-04-22 12:51:00] -->
<!-- update -->

<!-- [2016-04-22 14:25:00] -->
<!-- update -->

<!-- [2016-04-25 09:00:00] -->
<!-- update -->

<!-- [2016-04-25 10:17:00] -->
<!-- update -->

<!-- [2016-05-03 09:00:00] -->
<!-- update -->

<!-- [2016-05-03 10:17:00] -->
<!-- update -->

<!-- [2016-05-03 12:51:00] -->
<!-- update -->

<!-- [2016-05-16 09:00:00] -->
<!-- update -->

<!-- [2016-05-16 11:34:00] -->
<!-- update -->

<!-- [2016-05-17 09:00:00] -->
<!-- update -->

<!-- [2016-05-17 11:34:00] -->
<!-- update -->

<!-- [2016-05-18 09:00:00] -->
<!-- update -->

<!-- [2016-05-18 10:17:00] -->
<!-- update -->

<!-- [2016-06-03 09:00:00] -->
<!-- update -->

<!-- [2016-06-03 10:17:00] -->
<!-- update -->

<!-- [2016-06-03 11:34:00] -->
<!-- update -->

<!-- [2016-06-17 09:00:00] -->
<!-- update -->

<!-- [2016-06-17 11:34:00] -->
<!-- update -->

<!-- [2016-06-21 09:00:00] -->
<!-- update -->

<!-- [2016-06-29 12:51:00] -->
<!-- update -->

<!-- [2016-06-30 09:00:00] -->
<!-- update -->

<!-- [2016-06-30 10:17:00] -->
<!-- update -->

<!-- [2016-07-12 09:00:00] -->
<!-- update -->

<!-- [2016-07-12 10:17:00] -->
<!-- update -->

<!-- [2016-07-12 11:34:00] -->
<!-- update -->

<!-- [2016-07-12 13:08:00] -->
<!-- update -->

<!-- [2016-07-13 11:34:00] -->
<!-- update -->

<!-- [2016-07-22 10:17:00] -->
<!-- update -->

<!-- [2016-07-22 11:34:00] -->
<!-- update -->

<!-- [2016-07-25 09:00:00] -->
<!-- update -->

<!-- [2016-07-25 11:34:00] -->
<!-- update -->

<!-- [2016-07-29 09:00:00] -->
<!-- update -->

<!-- [2016-07-29 10:17:00] -->
<!-- update -->

<!-- [2016-07-29 11:34:00] -->
<!-- update -->

<!-- [2016-07-29 12:51:00] -->
<!-- update -->

<!-- [2016-07-29 14:25:00] -->
<!-- update -->

<!-- [2016-08-03 09:00:00] -->
<!-- update -->

<!-- [2016-08-08 09:00:00] -->
<!-- update -->

<!-- [2016-08-11 09:00:00] -->
<!-- update -->

<!-- [2016-08-11 10:17:00] -->
<!-- update -->

<!-- [2016-09-09 10:17:00] -->
<!-- update -->

<!-- [2016-09-09 11:34:00] -->
<!-- update -->

<!-- [2016-09-22 10:17:00] -->
<!-- update -->

<!-- [2016-09-30 09:00:00] -->
<!-- update -->

<!-- [2016-09-30 10:17:00] -->
<!-- update -->

<!-- [2016-09-30 11:34:00] -->
<!-- update -->

<!-- [2016-10-03 09:00:00] -->
<!-- update -->

<!-- [2016-10-03 10:17:00] -->
<!-- update -->

<!-- [2016-10-18 10:17:00] -->
<!-- update -->

<!-- [2016-10-28 09:00:00] -->
<!-- update -->

<!-- [2016-10-28 13:08:00] -->
<!-- update -->

<!-- [2016-10-31 09:00:00] -->
<!-- update -->

<!-- [2016-11-02 09:00:00] -->
<!-- update -->

<!-- [2016-11-17 09:00:00] -->
<!-- update -->

<!-- [2016-11-17 11:34:00] -->
<!-- update -->

<!-- [2016-11-22 09:00:00] -->
<!-- update -->

<!-- [2016-11-22 10:17:00] -->
<!-- update -->

<!-- [2016-12-02 09:00:00] -->
<!-- update -->

<!-- [2016-12-06 10:17:00] -->
<!-- update -->

<!-- [2016-12-07 09:00:00] -->
<!-- update -->

<!-- [2016-12-07 11:34:00] -->
<!-- update -->

<!-- [2016-12-07 12:51:00] -->
<!-- update -->

// [2026-02-12 09:00:00]
// update

// [2026-04-01 09:00:00]
// update

// [2026-04-08 09:00:00]
// update

// [2026-04-11 10:17:00]
// update

// [2026-05-31 10:17:00]
// update

// [2026-06-09 09:00:00]
// update

<!-- [2015-01-15 10:17:00] -->
<!-- update -->

<!-- [2015-01-15 11:34:00] -->
<!-- update -->

<!-- [2015-01-15 12:51:00] -->
<!-- update -->

<!-- [2015-01-19 09:00:00] -->
<!-- update -->

<!-- [2015-01-23 09:00:00] -->
<!-- update -->

<!-- [2015-01-23 11:34:00] -->
<!-- update -->

<!-- [2015-01-28 09:00:00] -->
<!-- update -->

<!-- [2015-01-28 11:34:00] -->
<!-- update -->

<!-- [2015-02-18 09:00:00] -->
<!-- update -->

<!-- [2015-02-18 11:34:00] -->
<!-- update -->

<!-- [2015-02-18 13:08:00] -->
<!-- update -->

<!-- [2015-03-11 09:00:00] -->
<!-- update -->

<!-- [2015-03-11 10:17:00] -->
<!-- update -->

<!-- [2015-03-16 09:00:00] -->
<!-- update -->

<!-- [2015-03-16 11:34:00] -->
<!-- update -->

<!-- [2015-03-16 12:51:00] -->
<!-- update -->

<!-- [2015-03-27 10:17:00] -->
<!-- update -->

<!-- [2015-03-27 11:34:00] -->
<!-- update -->

<!-- [2015-04-09 09:00:00] -->
<!-- update -->

<!-- [2015-04-10 10:17:00] -->
<!-- update -->

<!-- [2015-04-10 11:34:00] -->
<!-- update -->

<!-- [2015-04-10 12:51:00] -->
<!-- update -->

<!-- [2015-04-20 09:00:00] -->
<!-- update -->

<!-- [2015-04-20 10:17:00] -->
<!-- update -->

<!-- [2015-04-20 12:51:00] -->
<!-- update -->

<!-- [2015-04-20 13:08:00] -->
<!-- update -->

<!-- [2015-04-22 09:00:00] -->
<!-- update -->

<!-- [2015-04-22 10:17:00] -->
<!-- update -->

<!-- [2015-04-24 10:17:00] -->
<!-- update -->

<!-- [2015-04-24 12:51:00] -->
<!-- update -->

<!-- [2015-05-18 09:00:00] -->
<!-- update -->

<!-- [2015-05-29 10:17:00] -->
<!-- update -->

<!-- [2015-05-29 11:34:00] -->
<!-- update -->

<!-- [2015-06-01 09:00:00] -->
<!-- update -->

<!-- [2015-06-01 10:17:00] -->
<!-- update -->

<!-- [2015-06-16 09:00:00] -->
<!-- update -->

<!-- [2015-06-16 10:17:00] -->
<!-- update -->

<!-- [2015-06-16 11:34:00] -->
<!-- update -->

<!-- [2015-06-17 13:08:00] -->
<!-- update -->

<!-- [2015-06-18 09:00:00] -->
<!-- update -->

<!-- [2015-06-18 10:17:00] -->
<!-- update -->

<!-- [2015-06-18 12:51:00] -->
<!-- update -->

<!-- [2015-06-26 09:00:00] -->
<!-- update -->

<!-- [2015-06-30 10:17:00] -->
<!-- update -->

<!-- [2015-06-30 11:34:00] -->
<!-- update -->

<!-- [2015-07-01 10:17:00] -->
<!-- update -->

<!-- [2015-07-01 11:34:00] -->
<!-- update -->

<!-- [2015-07-01 12:51:00] -->
<!-- update -->

<!-- [2015-07-01 13:08:00] -->
<!-- update -->

<!-- [2015-07-02 09:00:00] -->
<!-- update -->

<!-- [2015-07-27 11:34:00] -->
<!-- update -->

<!-- [2015-07-27 12:51:00] -->
<!-- update -->

<!-- [2015-07-28 09:00:00] -->
<!-- update -->

<!-- [2015-07-28 10:17:00] -->
<!-- update -->

<!-- [2015-07-29 09:00:00] -->
<!-- update -->

<!-- [2015-07-30 09:00:00] -->
<!-- update -->

<!-- [2015-07-30 11:34:00] -->
<!-- update -->

<!-- [2015-07-30 13:08:00] -->
<!-- update -->

<!-- [2015-08-06 09:00:00] -->
<!-- update -->

<!-- [2015-08-10 10:17:00] -->
<!-- update -->

<!-- [2015-08-13 10:17:00] -->
<!-- update -->

<!-- [2015-08-13 11:34:00] -->
<!-- update -->

<!-- [2015-09-01 10:17:00] -->
<!-- update -->

<!-- [2015-09-03 09:00:00] -->
<!-- update -->

<!-- [2015-09-03 10:17:00] -->
<!-- update -->

<!-- [2015-09-03 12:51:00] -->
<!-- update -->

<!-- [2015-09-03 13:08:00] -->
<!-- update -->

<!-- [2015-09-11 11:34:00] -->
<!-- update -->

<!-- [2015-09-29 10:17:00] -->
<!-- update -->

<!-- [2015-09-29 11:34:00] -->
<!-- update -->

<!-- [2015-09-30 10:17:00] -->
<!-- update -->

<!-- [2015-10-26 09:00:00] -->
<!-- update -->

<!-- [2015-10-26 10:17:00] -->
<!-- update -->

<!-- [2015-10-26 11:34:00] -->
<!-- update -->

<!-- [2015-10-30 09:00:00] -->
<!-- update -->

<!-- [2015-10-30 10:17:00] -->
<!-- update -->

<!-- [2015-11-09 09:00:00] -->
<!-- update -->

<!-- [2015-11-09 10:17:00] -->
<!-- update -->

<!-- [2015-11-09 12:51:00] -->
<!-- update -->

<!-- [2016-01-15 10:17:00] -->
<!-- update -->

<!-- [2016-01-15 11:34:00] -->
<!-- update -->

<!-- [2016-01-26 09:00:00] -->
<!-- update -->

<!-- [2016-01-26 11:34:00] -->
<!-- update -->

<!-- [2016-01-26 12:51:00] -->
<!-- update -->

<!-- [2016-01-28 10:17:00] -->
<!-- update -->

<!-- [2016-01-29 09:00:00] -->
<!-- update -->

<!-- [2016-01-29 11:34:00] -->
<!-- update -->

<!-- [2016-02-08 10:17:00] -->
<!-- update -->

<!-- [2016-02-11 09:00:00] -->
<!-- update -->

<!-- [2016-02-11 10:17:00] -->
<!-- update -->

<!-- [2016-02-23 09:00:00] -->
<!-- update -->

<!-- [2016-02-23 11:34:00] -->
<!-- update -->

<!-- [2016-02-23 12:51:00] -->
<!-- update -->

<!-- [2016-03-11 09:00:00] -->
<!-- update -->

<!-- [2016-03-11 11:34:00] -->
<!-- update -->

<!-- [2016-03-21 10:17:00] -->
<!-- update -->

<!-- [2016-03-23 09:00:00] -->
<!-- update -->

<!-- [2016-03-23 11:34:00] -->
<!-- update -->

<!-- [2016-03-23 13:08:00] -->
<!-- update -->

<!-- [2016-03-24 09:00:00] -->
<!-- update -->

<!-- [2016-03-24 10:17:00] -->
<!-- update -->

<!-- [2016-03-24 11:34:00] -->
<!-- update -->

<!-- [2016-03-25 09:00:00] -->
<!-- update -->

<!-- [2016-03-25 10:17:00] -->
<!-- update -->

<!-- [2016-03-25 11:34:00] -->
<!-- update -->

<!-- [2016-04-01 09:00:00] -->
<!-- update -->

<!-- [2016-04-01 11:34:00] -->
<!-- update -->

<!-- [2016-04-06 11:34:00] -->
<!-- update -->

<!-- [2016-04-25 10:17:00] -->
<!-- update -->

<!-- [2016-04-25 11:34:00] -->
<!-- update -->

<!-- [2016-04-25 12:51:00] -->
<!-- update -->

<!-- [2016-04-27 10:17:00] -->
<!-- update -->

<!-- [2016-05-06 11:34:00] -->
<!-- update -->

<!-- [2016-05-18 10:17:00] -->
<!-- update -->

<!-- [2016-05-18 12:51:00] -->
<!-- update -->

<!-- [2016-05-19 09:00:00] -->
<!-- update -->

<!-- [2016-06-02 11:34:00] -->
<!-- update -->

<!-- [2016-06-02 12:51:00] -->
<!-- update -->

<!-- [2016-06-02 13:08:00] -->
<!-- update -->

<!-- [2016-06-03 10:17:00] -->
<!-- update -->

<!-- [2016-06-14 09:00:00] -->
<!-- update -->

<!-- [2016-06-14 10:17:00] -->
<!-- update -->

<!-- [2016-06-14 11:34:00] -->
<!-- update -->

<!-- [2016-06-14 12:51:00] -->
<!-- update -->

<!-- [2016-06-16 11:34:00] -->
<!-- update -->

<!-- [2016-06-16 14:25:00] -->
<!-- update -->

<!-- [2016-06-17 11:34:00] -->
<!-- update -->

<!-- [2016-06-29 09:00:00] -->
<!-- update -->

<!-- [2016-06-29 10:17:00] -->
<!-- update -->

<!-- [2016-06-30 09:00:00] -->
<!-- update -->

<!-- [2016-06-30 10:17:00] -->
<!-- update -->

<!-- [2016-07-11 09:00:00] -->
<!-- update -->

<!-- [2016-07-14 09:00:00] -->
<!-- update -->

<!-- [2016-07-14 10:17:00] -->
<!-- update -->

<!-- [2016-07-20 10:17:00] -->
<!-- update -->

<!-- [2016-07-22 09:00:00] -->
<!-- update -->

<!-- [2016-07-22 10:17:00] -->
<!-- update -->

<!-- [2016-08-11 10:17:00] -->
<!-- update -->

<!-- [2016-08-22 09:00:00] -->
<!-- update -->

<!-- [2016-08-22 10:17:00] -->
<!-- update -->

<!-- [2016-08-23 10:17:00] -->
<!-- update -->

<!-- [2016-08-23 11:34:00] -->
<!-- update -->

<!-- [2016-08-25 09:00:00] -->
<!-- update -->

<!-- [2016-08-25 10:17:00] -->
<!-- update -->

<!-- [2016-08-25 11:34:00] -->
<!-- update -->

<!-- [2016-09-26 10:17:00] -->
<!-- update -->

<!-- [2016-11-14 09:00:00] -->
<!-- update -->

<!-- [2016-11-14 10:17:00] -->
<!-- update -->

<!-- [2016-11-14 11:34:00] -->
<!-- update -->

<!-- [2016-11-18 09:00:00] -->
<!-- update -->

<!-- [2016-11-18 10:17:00] -->
<!-- update -->

<!-- [2016-11-18 11:34:00] -->
<!-- update -->

<!-- [2016-11-18 12:51:00] -->
<!-- update -->

<!-- [2016-11-29 14:25:00] -->
<!-- update -->

<!-- [2016-12-01 09:00:00] -->
<!-- update -->

<!-- [2016-12-01 11:34:00] -->
<!-- update -->
