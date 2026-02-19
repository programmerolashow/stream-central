const Footer = () => (
  <footer className="px-4 md:px-12 py-10 text-muted-foreground text-xs">
    <div className="max-w-3xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {["Audio Description", "Help Center", "Gift Cards", "Media Center",
          "Investor Relations", "Jobs", "Terms of Use", "Privacy",
          "Legal Notices", "Cookie Preferences", "Corporate Information", "Contact Us"
        ].map((link) => (
          <a key={link} href="#" className="hover:text-foreground transition-colors underline underline-offset-2">
            {link}
          </a>
        ))}
      </div>
      <p className="text-muted-foreground/60">© 2025 Netflix Clone. For demo purposes only.</p>
    </div>
  </footer>
);

export default Footer;
