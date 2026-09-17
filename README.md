# CampusCart 🛒

A small e-commerce product catalog, built with **Flask + HTML/CSS/JS**.

This isn't a real store — it's a practice ground. The app works, but it's
seeded with **102 real bugs**, each one turned into a GitHub Issue. Your job
today: pick one issue, fix the bug, and open your first pull request.

---

## Why this exists

We did a GitHub theory session before and it didn't really land — nobody
had actually *done* the thing. This time, everyone raises at least one PR
against a real issue, on a real repo, before they leave.

## What the app does

- Browse products by category, sort by name/price/rating, paginate results
- View a product detail page: reviews, star rating, low-stock and sale badges
- Add to cart, adjust quantities, remove items, apply a coupon (`STUDENT10`)
- Checkout with tax + shipping calculation
- Search, wishlist, "recently viewed", newsletter signup
- Mobile nav toggle, dark mode toggle, back-to-top button

Some of these currently work wrong. That's the point.

## Getting it running locally

```bash
git clone <your-fork-url>
cd campuskart
python3 -m venv venv <------ For Macbook users
source venv/bin/activate  <-------- For Macbook users
pip install -r requirements.txt
python app.py
```
<!-- This is a single-line comment -->
Then open **http://127.0.0.1:5000** in your browser.

## How to work an issue

1. **Pick an open issue** from the Issues tab. Each one names a file and
   describes what's broken — it does **not** tell you the fix.
2. **Comment "working on this"** on the issue, so two people don't fix the
   same one.
3. **Fork this repo**, then clone your fork.
4. **Create a branch** named after the issue:
   ```bash
   git checkout -b fix-issue-12
   ```
5. **Find the bug.** Read the file the issue points to. Look for the exact
   line range mentioned. Understand *why* it's wrong before you change it.
6. **Fix only that one bug.** Don't refactor unrelated code, don't fix a
   second bug you notice along the way — open a separate issue/PR for that
   instead. Small PRs are easier to review.
7. **Test it.** Reload the app and confirm the specific behavior in the
   issue is actually fixed — for backend bugs, that means checking the page
   in your browser, not just reading the code. Every backend bug here
   changes something you can see: a total, a badge, a message, a banner.
8. **Commit and push:**
   ```bash
   git add .
   git commit -m "Fix #12: <short description>"
   git push origin fix-issue-12
   ```
9. **Open a PR** from your fork back to this repo. In the PR description,
   write `Fixes #12` (swap in your issue number) — this auto-links and
   auto-closes the issue when the PR is merged.

## Ground rules

- One issue at a time. Finish and get a PR up before claiming another.
- If your issue is already claimed, pick a different one — there's no
  need to duplicate work.
- Bugs are independent by design — you shouldn't need to touch code
  another issue depends on. If you think you do, flag it, don't guess.
- Ask for help. The point of today is understanding the *flow*, not
  struggling silently.

## Labels

- `frontend` / `backend` — where the bug lives (71 frontend, 31 backend)
- `good-first-issue` — safe starting point if this is your first PR ever
- `intermediate` — a bit more logic to trace through

Good luck — first PR merged wins bragging rights. 🏆
