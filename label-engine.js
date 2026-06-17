
// Configuration object (merged JSON into JS)
const labelConfig = {
  "welcome_message": "Welcome to Propwelink!",
  "contact_us": "Reach us at support@propwelink.com",
  "company": "Propwelink",
  "footer_note": "© 2026 Propwelink Pvt Ltd",
  "submit_contact_details":"ttps://formspree.io/f/xrevjbjn",
  "website_notice": "We are Real Estate Advisory Company. Currently our website is under deveplopment phase, meanwhile if you are looking for investment in real estate market, then leave us your contact deails, our team will call you back soon"
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
