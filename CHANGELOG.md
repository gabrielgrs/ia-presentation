# Changelog

## [Unreleased] - 2025-06-26

### 🎨 Assets & Icons

- **Added**: `chevron-gradient-right.svg` - New gradient chevron icon for inline navigation elements
- **Added**: `laptop-update.svg` - New laptop update icon for subscription features
- **Removed**: `shield.svg` - Replaced with laptop-update icon

### 🏠 Hero Section (`src/components/home/hero.tsx`)

- **Responsive Design**: Enhanced title max-width across multiple breakpoints:
  - Desktop (1440px+): `max-w-[705px]`
  - Large (1260px): `max-w-[675px]`
  - Medium (1024px): `max-w-[650px]`
  - Tablet (768px): `max-w-[740px]`
  - Mobile (480px): `max-w-[728px]`
- **Layout**: Improved conditional padding for mobile devices
- **Background**: Enhanced responsive background image handling

### 💼 Benefits Section (`src/components/home/benefits.tsx`)

- **Responsive Images**: Added mobile-specific image switching
  - Desktop: `man-in-desktop.jpg`
  - Mobile (≤1024px): `man-in-desktop-mobile.jpg`
- **Privacy Link**: Enhanced styling and functionality
  - Added inline gradient chevron icon
  - Removed default underline styling
  - Improved inline alignment with `align-middle` and `pl-1` classes
- **Content**: Removed unnecessary line breaks for cleaner layout

### 🎮 Enhanced Setup Section (`src/components/home/enhace-your-setup.tsx`)

- **Responsive Layout**: Improved conditional padding and styling
- **Title Width**: Enhanced responsive title max-width:
  - Desktop: `max-w-[730px]`
  - Large (1440px): `max-w-[680px]`
  - Medium (1260px): `max-w-[690px]`
  - Mobile (≤1024px): `max-w-max`
- **Background**: Better mobile background image handling

### ⚙️ How It Works Section (`src/components/home/how-it-works.tsx`)

- **List Layout**: Restructured numbered list with grid system
  - Changed from flex to `grid-cols-[max-content,auto]`
  - Added centered number styling with fixed width (`w-[90px]`)
- **Upgrade Section**:
  - Converted to proper `Heading` component structure
  - Simplified title from multi-line to single line
- **List Styling**: Standardized padding (`pl-6`) across all lists
- **Responsive**: Enhanced mobile padding and layout

### 📋 Subscription Includes Section (`src/components/home/subscription-includes.tsx`)

- **Responsive Design**: Comprehensive mobile improvements
  - Enhanced grid layout: `lte-1260:flex-col lte-1260:items-center`
  - Mobile alignment: `lte-480:items-start`
  - Mobile padding: `lte-480:px-[40px]`
- **Typography**: Responsive text sizing
  - Desktop: `text-[20px]`
  - Mobile (≤768px): `text-[16px]`
  - Small mobile (≤375px): Allow text wrapping
- **Content Updates**:
  - "Expert 24/7 support" → "Dedicated 24/7 Pro live support"
  - Updated "Next business day replacement" with proper superscript
  - Simplified "Upgrades after 12 months" text

### 📊 Features Table Section (`src/components/home/features-table.tsx`)

- **Title**: Simplified from multi-line to single line for better readability
- **Layout**: Improved responsive behavior

### 🎯 Free Trial Section (`src/components/home/free-trial.tsx`)

- **Modal Trigger**: Updated button design
  - Replaced info icon with chevron-right icon
  - Added proper flex alignment with `items-center`
  - Sized icon to `w-[16px] h-[16px]`
- **Grid Layout**: Simplified cancellation information grid for mobile

### ❓ FAQ Section (`src/components/home/faq.tsx`)

- **Navigation**: Added `scroll-mt-[88px]` for better anchor navigation
- **List Styling**: Standardized all list padding to `pl-6`
- **Content**: Improved formatting throughout FAQ items

### 🧭 Navigation (`src/components/navbar/index.tsx`)

- **Intersection Observer**: Enhanced active state detection
  - Improved algorithm to find most visible section
  - Better root margin configuration (`-20% 0px -20% 0px`)
- **Mobile Design**:
  - Added responsive padding using section utilities
  - Enhanced active state visual feedback
  - Improved underline animation for mobile
  - Logo text now uppercase on mobile devices
- **Layout**: Better responsive spacing and alignment

### 🔧 Core Components

#### Section Component (`src/components/section/index.tsx`)

- **Responsive Padding**: Updated utilities for better mobile experience
  - Changed from `lte-1024:px-[20px]` to `lte-768:px-[20px]`

#### Link Component (`src/components/link.tsx`)

- **Type Enhancement**: Updated to support `ReactNode` children instead of just strings
- **Flexibility**: Improved component reusability

#### Section Content Component (`src/components/section/section-content.tsx`)

- **Default Styling**: Added consistent default spacing (`space-y-[50px]` desktop, `space-y-[30px]` mobile)
- **Layout Enhancement**: Added `relative` positioning for better component composition
- **Responsive Spacing**: Automatic responsive spacing reduces repetitive className declarations

### 🛍️ Product Components

#### Product Card (`src/components/home/laptops/product-card.tsx`)

- **Optional Best For**: Made `bestFor` prop optional with conditional rendering
- **Type Safety**: Enhanced TypeScript types for better flexibility

#### Product Modal (`src/components/home/laptops/product-modal.tsx`)

- **Responsive Layout**: Added mobile-friendly flex column layout (`lte-1024:flex-col`)
- **Mobile Experience**: Improved modal display on smaller screens

#### Laptops Section (`src/components/home/laptops/index.tsx`)

- **Layout Cleanup**: Removed redundant `space-y-[50px] w-full` classes from SectionContent
- **Consistency**: Leveraged default SectionContent styling

#### Spec Item Component (`src/components/home/laptops/spec-item.tsx`)

- **HTML Rendering**: Added `dangerouslySetInnerHTML` support for HTML content in specs
- **Element Change**: Changed from `div` to `p` element for better semantic structure
- **Enhanced Content**: Now supports HTML formatting like superscript tags

### 🎯 What Is Included Section (`src/components/home/what-is-included.tsx`)

- **Grid Layout**: Enhanced responsive grid spacing
  - Desktop: `gap-[24px]`
  - Mobile (≤1024px): `gap-[40px]`
- **Responsive Design**: Improved layout for different screen sizes

### 📦 Store Content (`src/helpers/content/store/index.ts`)

- **Product Updates**: Removed `bestFor` descriptions from all laptop products
- **Type Safety**: Updated laptop type to make `bestFor` optional
- **Cleaner Design**: Simplified product cards by removing marketing taglines

### 📱 Responsive Design System

- **Breakpoints**: Comprehensive updates across 375px, 480px, 768px, 1024px, 1260px, 1440px
- **Consistency**: Standardized responsive utilities and conditional styling
- **Mobile-First**: Enhanced mobile experience across all sections
