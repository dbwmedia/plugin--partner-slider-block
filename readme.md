# Logo Slider Block

[![WordPress Plugin Version](https://img.shields.io/badge/version-1.0.0-blue)](https://wordpress.org/plugins/logo-slider-block/)
[![License](https://img.shields.io/badge/license-GPL%20v2-green)](https://www.gnu.org/licenses/gpl-2.0.html)
[![WordPress](https://img.shields.io/badge/WordPress-5.8%2B-blue)](https://wordpress.org/)
[![PHP](https://img.shields.io/badge/PHP-7.2%2B-purple)](https://php.net/)

A professional infinity logo slider Gutenberg block with customizable speed, spacing and hover-pause. Perfect for showcasing client, partner or sponsor logos.

## 🎯 Features

- ✨ **Infinity Scrolling** - Seamless, continuous scrolling without interruption
- ⏸️ **Hover-Pause** - Animation automatically pauses on mouse hover
- 🎚️ **Customizable Speed** - Slow, medium, or fast scrolling options
- 📏 **Flexible Logo Spacing** - Small, medium, or large gaps between logos
- 🔗 **Optional Logo Links** - Link each logo individually with target="\_blank"
- 🎨 **Overlay Control** - Enable/disable edge overlay with color picker
- ⚫ **Black Logos Mode** - Convert all logos to black for uniform appearance
- 📱 **Responsive Design** - Perfect display on all devices
- 🚀 **Performance Optimized** - Lightweight and fast loading

## 📸 Screenshots

### Editor View

![Editor View](screenshots/editor-view.png)

### Frontend Display

![Frontend View](screenshots/frontend-view.png)

### Settings Panel

![Settings](screenshots/settings.png)

## 🚀 Installation

### Via WordPress Admin

1. Navigate to `Plugins > Add New`
2. Search for "Logo Slider Block"
3. Click "Install Now" and then "Activate"

### Manual Installation

1. Download the plugin ZIP file
2. Extract the ZIP file
3. Upload the `logo-slider-block` folder to `/wp-content/plugins/`
4. Activate the plugin in WordPress Admin

### Developer Installation

```bash
# Clone repository
git clone https://github.com/dbw-media/logo-slider-block.git

# Navigate to plugin directory
cd logo-slider-block

# Install dependencies
npm install

# Build for production
npm run build

# For development with hot reload
npm run start
```

## 📖 Usage

### Basic Usage

1. Open the Gutenberg editor
2. Add a new block
3. Search for "Logo Slider"
4. Insert the block
5. Upload your logos
6. Configure settings as needed

### Block Settings

#### Speed Options

- **Slow**: 40 seconds per complete loop
- **Medium**: 25 seconds (default)
- **Fast**: 15 seconds

#### Logo Spacing

- **Small**: 20px between logos
- **Medium**: 40px (default)
- **Large**: 60px

#### Margins

- **Small**: 25px top/bottom
- **Medium**: 50px (default)
- **Large**: 75px

#### Overlay Settings

- **Show Overlay**: Toggle to enable/disable edge fade
- **Overlay Color**: Color picker for custom overlay color

#### Logo Display

- **Black Logos**: Convert all logos to black for uniform appearance

## 🛠️ Development

### Requirements

- Node.js 14.0 or higher
- npm or yarn
- WordPress 5.8 or higher
- PHP 7.2 or higher

### Build Commands

```bash
# Development with hot reload
npm run start

# Production build
npm run build

# Code linting
npm run lint:js

# Code formatting
npm run format

# Update packages
npm run packages-update
```

### File Structure

```
logo-slider-block/
├── build/                  # Compiled files
├── src/                    # Source files
│   ├── index.js           # Main block file
│   ├── frontend.js        # Frontend script
│   ├── editor.scss        # Editor styles
│   └── style.scss         # Frontend styles
├── languages/             # Translations
├── screenshots/           # Plugin screenshots
├── logo-slider-block.php  # Main plugin file
├── uninstall.php         # Cleanup on uninstall
├── package.json          # NPM configuration
├── readme.txt            # WordPress.org readme
└── readme.md            # GitHub readme
```

## 🌐 Internationalization

The plugin is fully translation-ready. You can add translations using:

1. **PO/MO files**: Place in the `languages/` folder
2. **Loco Translate**: Use the plugin for easy translation
3. **WPML/Polylang**: Fully compatible

### Available Languages

- 🇬🇧 English (default)
- 🇩🇪 German (coming soon)
- 🇫🇷 French (planned)
- 🇪🇸 Spanish (planned)

## 📋 Requirements

- WordPress 5.8 or higher
- PHP 7.2 or higher
- Gutenberg editor enabled
- Modern browsers (Chrome, Firefox, Safari, Edge)

## 🤝 Support

### Getting Help

- 💬 **Support Forum**: [WordPress.org Support](https://wordpress.org/support/plugin/logo-slider-block/)
- 📧 **Email**: hallo@dbw-media.de
- 🌐 **Website**: [dbw-media.de](https://dbw-media.de)
- 📚 **Documentation**: Available in the plugin description

### Professional Services

Need custom development? We offer professional WordPress development services for custom plugins, themes, and solutions tailored to your needs.

**[Get in Touch →](https://dbw-media.de/contact)**

## 👥 About dbw media

[dbw media](https://dbw-media.de) is a full-service WordPress agency from Germany. We specialize in:

- 🔧 Custom WordPress Development
- 🎨 Bespoke Theme Design
- 🔌 Custom Plugins & Gutenberg Blocks
- 🛒 WooCommerce Solutions
- 🚀 Performance Optimization
- 🔒 Security Audits
- 📈 SEO & Marketing
- 🤝 Support & Maintenance

### Our Expertise

- **10+ years** WordPress experience
- **500+** successful projects
- **Enterprise** level solutions
- **GDPR** compliant implementations

## 📝 Changelog

### Version 1.0.0 (2024)

- 🎉 Initial release
- ✨ Infinity scrolling for logos
- ✨ Customizable speed and spacing
- ✨ Hover-pause functionality
- ✨ Optional links for each logo
- ✨ Overlay controls with color picker
- ✨ Black logos option
- ✨ Fully responsive design
- ✨ WordPress 6.4 compatibility

## 📄 License

This plugin is licensed under GPL v2 or later.

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.

## 🙏 Credits

- Developed with ❤️ by [dbw media](https://dbw-media.de)
- Built with [WordPress Scripts](https://developer.wordpress.org/block-editor/packages/packages-scripts/)
- Icons from [WordPress Dashicons](https://developer.wordpress.org/resource/dashicons/)

## 🔗 Links

- [Plugin on WordPress.org](https://wordpress.org/plugins/logo-slider-block/) _(coming soon)_
- [GitHub Repository](https://github.com/dbw-media/logo-slider-block)
- [dbw media Website](https://dbw-media.de)
- [Support Forum](https://wordpress.org/support/plugin/logo-slider-block/)

---

**Made with ❤️ by [dbw media](https://dbw-media.de) - Professional WordPress Development**
