// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

// Mock IntersectionObserver for Framer Motion in JSDOM
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
}

window.IntersectionObserver = window.IntersectionObserver || MockIntersectionObserver;

// Mock window.scrollTo
if (typeof window.scrollTo !== 'function') {
  window.scrollTo = () => {};
}
