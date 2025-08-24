# CMS Laboral - Website

A modern occupational health services website built for CMS Laboral, providing comprehensive medical examination services and occupational health solutions for businesses in Argentina.

## Project Overview

This website serves as the digital presence for CMS Laboral, featuring:

- **Service Information**: Comprehensive details about occupational health services
- **Interactive Forms**: Contact and demo request functionality with email integration
- **Responsive Design**: Mobile-first approach with modern UI components
- **Performance Optimized**: Fast loading times with image optimization
- **SEO Friendly**: Proper meta tags, sitemap, and structured data

## Development Setup

### Prerequisites

- Node.js (18.x or higher) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd fl_cms-1

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development environment
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run optimize:images` - Optimize images for web
- `npm run generate:og` - Generate Open Graph images

## Technology Stack

### Core Framework
- **Vite** - Fast build tool and development server
- **React 18** - UI library with modern hooks
- **TypeScript** - Type-safe JavaScript development
- **React Router DOM** - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **next-themes** - Dark/light theme support

### Form Handling
- **React Hook Form** - Performant form library
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Email Services
- **Resend** - Modern email API for transactional emails
- **HTML Templates** - Custom email templates with variable substitution

### Data & State
- **TanStack Query** - Data fetching and caching
- **React Helmet Async** - Document head management

### Additional Features
- **Embla Carousel** - Touch-friendly carousel component
- **Recharts** - Chart and data visualization library
- **Sonner** - Toast notifications
- **date-fns** - Date utility library
- **cmdk** - Command palette component

### Development Tools
- **ESLint** - Code linting with TypeScript support
- **Sharp** - Image processing and optimization
- **Terser** - JavaScript minification
- **PostCSS** - CSS processing with Autoprefixer

## Key Features

### Email Integration
The application uses **Resend** for email functionality:
- Demo request forms send notifications to administrators
- Automatic confirmation emails to users
- HTML email templates with variable substitution
- Environment-based configuration for different deployments

### Performance Optimization
- Image optimization with multiple format support (AVIF, WebP, JPEG)
- Lazy loading and responsive images
- Bundle optimization with Vite
- SEO optimization with proper meta tags

### Accessibility
- ARIA-compliant components via Radix UI
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## Deployment

### Environment Variables

Required for email functionality:
```
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=your_from_email@domain.com
ALERT_TO_EMAIL=notifications@yourdomain.com
```

### Build Process

```bash
# Production build
npm run build

# The built files will be in the `dist/` directory
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── forms/          # Form components
│   └── icons/          # Custom icons
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── assets/             # Images and static assets
└── main.tsx           # Application entry point

api/                    # Serverless API functions
templates/              # Email templates
public/                 # Static assets
```

## Documentation

This README serves as the primary documentation for the project. For additional implementation details:

- Check the `recommendations.md` file for website enhancement suggestions
- Component documentation is available in respective component files
- API endpoints are documented in the `api/` directory

## Support

For technical issues or questions about the codebase, please refer to the project's issue tracker or contact the development team.

---

*Built with modern web technologies for optimal performance and user experience.*
