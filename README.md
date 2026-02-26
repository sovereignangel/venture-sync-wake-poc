# WakeSync - Never Miss a Morning Meeting

## Description

WakeSync helps busy partners avoid missed morning meetings by proactively alerting both based on shared calendar events.

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone [repository URL]
    cd sync-wake
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Configure environment variables:**

    -   Create a `.env.local` file in the root directory.
    -   Copy the contents of `.env.example` into `.env.local` and fill in the required values.

        ```
        NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
        NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
        TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        TWILIO_AUTH_TOKEN=your_auth_token
        TWILIO_PHONE_NUMBER=+15555555555
        GOOGLE_CLIENT_ID=your_google_client_id
        GOOGLE_CLIENT_SECRET=your_google_client_secret
        NEXTAUTH_SECRET=your_nextauth_secret
        ```

    -   **Obtain API keys and credentials:**
        -   **Supabase:** Create a project on Supabase ([https://supabase.com/](https://supabase.com/)) and obtain your URL and anon key.
        -   **Twilio:** Create a Twilio account ([https://www.twilio.com/](https://www.twilio.com/)) and obtain your Account SID, Auth Token, and a Twilio phone number.
        -   **Google Calendar API:** Follow the Google Calendar API quickstart guide to create credentials and download your `client_secret.json` file.  You will need to configure OAuth 2.0 and set up your consent screen.

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Vercel

This project is configured for zero-config deployment to Vercel. Simply push your code to a Git repository (e.g., GitHub, GitLab, Bitbucket) and import the project into Vercel.

1.  **Create a Vercel account:** ([https://vercel.com/](https://vercel.com/)).
2.  **Install the Vercel CLI:**

    ```bash
    npm install -g vercel
    ```

3.  **Link your project to Vercel:**

    ```bash
    vercel
    ```

4.  **Deploy your project:**

    ```bash
    vercel --prod
    ```

5.  **Set environment variables in Vercel:**

    -   Go to your Vercel project dashboard.
    -   Navigate to the "Settings" tab, then "Environment Variables".
    -   Add all the environment variables from your `.env.local` file.

## API Routes

-   `/api/alerts`: (Mocked) Simulates checking for upcoming meetings and sending Twilio alerts.

## Tech Stack

-   [Next.js](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Supabase](https://supabase.com/) (for database - not fully implemented in this MVP)
-   [Twilio](https://www.twilio.com/) (for SMS/Call alerts - mocked)
-   [Google Calendar API](https://developers.google.com/calendar) (not fully implemented in this MVP)

## Notes

-   This is a proof-of-concept application and includes mock implementations for certain features (e.g., Twilio alerts, Google Calendar integration, database interactions).
-   The security requirements outlined in the project description have been carefully considered.
-   This README provides basic instructions. More detailed documentation and implementation are required for a production-ready application.