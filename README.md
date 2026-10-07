# EDABIP - Billing Dashboard Module

A modular, responsive billing dashboard view Figma design. Built with semantic HTML5 and vanilla CSS Grid/Flexbox, structured to dock directly alongside the main application.

---

## 🚀 Features Implemented (Day 1)

1. **Top Navigation Bar**
   - Search input box with icon integration.
   - Action controls: notification bell and brand logo avatar.

2. **Billing Header & Filter Controls**
   - User greeting (`Welcome Back, Alin!`) with active status badge.
   - Filter bar: date range picker (`Last 30 Days`), category dropdown (`All Categories`), and refresh action.

3. **Key Stat Metrics (4 Cards)**
   - **Current Plan:** Enterprise (with active badge).
   - **Current Period:** May 1 – May 31, 2025.
   - **Amount Due:** $2,450.00 (Due date indicator).
   - **Last Payment:** $2,450.00 (Confirmation indicator).

4. **Usage Overview (Current Period)**
   - 5-metric progress tracker tracking Active Users (43%), Storage (60%), Reports (25%), Active Dashboards (48%), and Data Processing (50%).

     <img width="943" height="466" alt="image" src="https://github.com/user-attachments/assets/27444ed9-46b5-4b78-bbc3-0e7d3ecfc7f2" />


5. **Split Operations Panel**
   - **Billing History:** Summary indicators ($29,450.00 Total Paid, Total Invoiced, Outstanding Amount) + visual CSS bar chart.
   - **Payment Methods:** Saved cards list (Visa default, Mastercard alternatives) + "Add New Payment Method" action.

6. **Subscription Pricing Matrix**
   - Dark theme container titled *Choose the Right Plan for Your Business*.
   - 3-tier matrix: **Basic ($29/mo)**, **Enterprise ($79/mo, active highlighted)**, and **Standard ($199/mo)** with feature checklists and call-to-action buttons.
  
     <img width="929" height="434" alt="image" src="https://github.com/user-attachments/assets/a4cde6dd-6686-4edb-a644-bd7d0382f8c1" />


---

## 📁 File Structure

```text
billing-component/
├── assets/
│   └── logo.png          # Brand logo asset
├── billing.html          # Semantic HTML view
├── billing.css           # Modular stylesheet
└── README.md             # Project documentation
