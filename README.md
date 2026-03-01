# GPA & CGPA Calculator

A modern, high-performance academic tracking application built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This tool allows students to calculate their Semester GPA and Cumulative GPA (CGPA) with ease, offering a premium user experience and real-time data persistence.

(public/preview.png)

## ✨ Key Features

- **Real-time GPA/CGPA Calculation:** Instant updates as you input your grades and credits.
- **Semester Management:** Add, edit, or remove multiple semesters to track your progress over time.
- **Dynamic Course Lists:** Add as many courses as needed per semester with letter grade and credit support.
- **Local Persistence:** Your data is automatically saved to your browser's `localStorage`, so you never lose your progress.
- **Responsive & Premium UI:** Fully responsive design with dark mode, smooth animations (powered by Lucide Icons), and a clean aesthetic.
- **Authentication Flow:** Simple client-side signup to personalize your experience.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React Context API & Local Storage
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm/yarn/pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hasnainali404/gpa-cgpa-calculator.git
   cd gpa-cgpa-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Navigate to [https://gpaclac.vercel.app/](https://gpaclac.vercel.app/) in your browser.

## 📝 Calculation Formulas

- **GPA:** $\frac{\sum (\text{Grade Points} \times \text{Credit Hours})}{\text{Total Credit Hours}}$
- **CGPA:** $\frac{\sum (\text{Semester GPA} \times \text{Semester Credits})}{\text{Total Cumulative Credits}}$

For more details on the grading scale and formulas, visit the `/formula` page within the application.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by [Hasnain Ali](https://github.com/Hasnainali404)
