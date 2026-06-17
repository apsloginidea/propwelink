
// Configuration object (merged JSON into JS)
const labelConfig = {
  "welcome_message": "Welcome to Propwelink!",
  "contact_us": "Reach us at support@propwelink.com",
  "company": "PropWeLink",
  "footer_note": "© 2026 Propwelink Pvt Ltd",
  "submit_contact_details":"ttps://formspree.io/f/xrevjbjn"
};

// Label Engine
class LabelEngine {
  constructor(mapping = {}) {
    this.mapping = mapping;
  }

  setLabel(tag, value) {
    this.mapping[tag] = value;
  }

  getLabel(tag) {
    return this.mapping[tag] || `Label not found for: ${tag}`;
  }

  bindLabels() {
    document.querySelectorAll("[data-label]").forEach(el => {
      const tag = el.getAttribute("data-label");
      el.textContent = this.getLabel(tag);
    });
  }
}

// Initialize on page load
window.onload = function() {
  const labels = new LabelEngine(labelConfig);
  labels.bindLabels();
};
