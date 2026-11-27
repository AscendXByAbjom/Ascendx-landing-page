export const lastUpdated = "27 November 2026";

export type LegalSection = {
  heading: string;
  body: string[];
};

export const privacy: { title: string; intro: string; sections: LegalSection[] } = {
  title: "Privacy Policy",
  intro:
    "AscendX Career Platform Limited (&ldquo;AscendX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal data. This policy explains what we collect, why we collect it, and how you can exercise your rights under UK GDPR and the Data Protection Act 2018.",
  sections: [
    {
      heading: "1. Who we are",
      body: [
        "AscendX Career Platform Limited is the data controller for personal data processed through ascendxcareer.ai and the AscendX mobile application. Our registered office is in the United Kingdom.",
        "Questions about this policy or our data practices should be directed to info@ascendxcareer.ai.",
      ],
    },
    {
      heading: "2. What data we collect",
      body: [
        "Account data: name, email address, phone number, and password hash created when you register.",
        "Profile data: work history, education, skills, CV, profile photo, and any other information you choose to add to your career profile.",
        "Usage data: pages visited, features used, session duration, search queries, and interactions with job listings or employer profiles.",
        "Device and technical data: IP address, browser type, operating system, and device identifiers collected automatically.",
        "Communications: messages you send via the platform's messaging features and responses to our support team.",
        "Payment data: billing name and address. Card numbers are processed directly by our payment provider and are never stored on our servers.",
      ],
    },
    {
      heading: "3. How we use your data",
      body: [
        "To provide and improve the AscendX platform, including personalised job recommendations, skill assessments, and AI career coaching.",
        "To match your profile with relevant employers and job opportunities.",
        "To communicate with you about your account, new features, and (where you have opted in) marketing.",
        "To detect fraud, enforce our Terms of Service, and comply with legal obligations.",
        "To analyse aggregated, anonymised usage trends and improve our product.",
      ],
    },
    {
      heading: "4. Legal bases for processing",
      body: [
        "Contract: processing necessary to deliver the services you have requested.",
        "Legitimate interests: improving the platform, preventing fraud, and communicating service updates.",
        "Consent: marketing emails and optional analytics cookies. You may withdraw consent at any time.",
        "Legal obligation: retaining records as required by applicable law.",
      ],
    },
    {
      heading: "5. Data sharing",
      body: [
        "We share data with employers only when you apply to a role or explicitly share your profile.",
        "We use trusted third-party service providers (hosting, analytics, payment processing, email delivery) under data processing agreements that require them to protect your data.",
        "We do not sell your personal data to any third party.",
        "We may disclose data to regulators or law-enforcement agencies when required by law or to protect the rights and safety of our users.",
      ],
    },
    {
      heading: "6. International transfers",
      body: [
        "Your data is primarily stored and processed in the UK and European Economic Area. Where we transfer data outside these regions we use appropriate safeguards such as Standard Contractual Clauses.",
      ],
    },
    {
      heading: "7. How long we keep your data",
      body: [
        "We retain your account data for as long as your account is active. If you delete your account, we delete or anonymise your personal data within 30 days, except where we are required to retain it by law.",
        "Anonymised, aggregated data may be retained indefinitely for analytical purposes.",
      ],
    },
    {
      heading: "8. Your rights",
      body: [
        "Under UK GDPR you have the right to: access your data; correct inaccurate data; delete your data; restrict or object to certain processing; data portability; and to withdraw consent.",
        "To exercise any of these rights, email info@ascendxcareer.ai. We will respond within 30 days. You also have the right to lodge a complaint with the Information Commissioner's Office (ico.org.uk).",
      ],
    },
    {
      heading: "9. Cookies",
      body: [
        "We use essential cookies required for the platform to function, and optional analytics cookies to understand how users navigate the site. You can manage your cookie preferences at any time using the Cookie Settings link in our footer.",
      ],
    },
    {
      heading: "10. Changes to this policy",
      body: [
        "We may update this policy from time to time. We will notify you of material changes by email or by a prominent notice in the app. The date at the top of this page shows when it was last revised.",
      ],
    },
  ],
};

export const terms: { title: string; intro: string; sections: LegalSection[] } = {
  title: "Terms of Service",
  intro:
    "These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of AscendX Career Platform Limited's website, mobile application, and related services (together, the &ldquo;Platform&rdquo;). By creating an account or using the Platform you agree to these Terms.",
  sections: [
    {
      heading: "1. Eligibility",
      body: [
        "You must be at least 16 years old to use the Platform. By agreeing to these Terms you confirm that you meet this requirement.",
        "If you are using the Platform on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.",
      ],
    },
    {
      heading: "2. Your account",
      body: [
        "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
        "You must provide accurate and complete information when creating your account and keep it up to date.",
        "You must notify us immediately at info@ascendxcareer.ai if you suspect unauthorised access to your account.",
      ],
    },
    {
      heading: "3. Acceptable use",
      body: [
        "You may use the Platform only for lawful purposes and in accordance with these Terms.",
        "You must not: upload false or misleading information; impersonate another person or entity; scrape, copy, or redistribute content from the Platform without our written consent; use automated tools to access the Platform in a way that places excessive load on our infrastructure; or attempt to gain unauthorised access to any part of the Platform.",
        "Employer accounts must not post misleading job listings or use candidate data for any purpose other than evaluating applications.",
      ],
    },
    {
      heading: "4. Content you post",
      body: [
        "You retain ownership of content you post to the Platform (such as your CV, profile information, and messages). By posting content you grant AscendX a non-exclusive, royalty-free licence to use, store, and display that content solely to operate and improve the Platform.",
        "You are solely responsible for the accuracy and legality of content you post. We reserve the right to remove content that violates these Terms or our Community Guidelines.",
      ],
    },
    {
      heading: "5. Subscription and payments",
      body: [
        "Certain features of the Platform require a paid subscription. Subscription fees are charged in advance for the selected billing period.",
        "All payments are processed securely by our payment provider. Prices are displayed inclusive of applicable taxes.",
        "Subscriptions renew automatically unless cancelled before the renewal date. You can cancel at any time from your account settings.",
        "We do not offer refunds for partially used billing periods, except where required by applicable consumer protection law.",
      ],
    },
    {
      heading: "6. Intellectual property",
      body: [
        "The Platform, including its design, software, and content (excluding user-generated content), is owned by AscendX Career Platform Limited and is protected by copyright and other intellectual property laws.",
        "You must not reproduce, distribute, or create derivative works from any part of the Platform without our prior written consent.",
      ],
    },
    {
      heading: "7. Disclaimers",
      body: [
        "The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We do not guarantee that the Platform will be uninterrupted, error-free, or that any job application will result in employment.",
        "AI-generated career coaching and skill recommendations are provided for informational purposes only and do not constitute professional career or legal advice.",
      ],
    },
    {
      heading: "8. Limitation of liability",
      body: [
        "To the fullest extent permitted by law, AscendX is not liable for any indirect, incidental, or consequential loss arising from your use of or inability to use the Platform.",
        "Our total liability to you for any claim arising under these Terms will not exceed the amount you paid to us in the 12 months preceding the claim.",
        "Nothing in these Terms limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.",
      ],
    },
    {
      heading: "9. Termination",
      body: [
        "You may delete your account at any time from your account settings.",
        "We may suspend or terminate your access if you breach these Terms, with or without prior notice depending on the severity of the breach.",
        "On termination, your licence to use the Platform ceases immediately. Sections that by their nature should survive termination (including intellectual property, disclaimers, and limitation of liability) will continue to apply.",
      ],
    },
    {
      heading: "10. Governing law",
      body: [
        "These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.",
      ],
    },
    {
      heading: "11. Changes to these Terms",
      body: [
        "We may update these Terms from time to time. We will give you at least 14 days' notice of material changes by email. Continued use of the Platform after the effective date of any change constitutes acceptance of the updated Terms.",
      ],
    },
  ],
};

export const communityGuidelines: { title: string; intro: string; sections: LegalSection[] } = {
  title: "Community Guidelines",
  intro:
    "AscendX is built on the belief that everyone deserves a fair shot at a career they love. These guidelines exist to keep the platform a safe, honest, and genuinely useful space for candidates and employers alike.",
  sections: [
    {
      heading: "Be authentic",
      body: [
        "Your profile is your professional identity. Represent your skills, experience, and qualifications accurately. Inflated CVs or false credentials harm employers and other candidates, and accounts found to contain false information will be removed.",
        "Employers must post genuine opportunities. Fake listings, misleading role descriptions, or bait-and-switch postings are not allowed.",
      ],
    },
    {
      heading: "Be respectful",
      body: [
        "Treat every person on the platform with professionalism and respect, regardless of their background, identity, or career stage.",
        "Harassment, bullying, hate speech, or any form of discriminatory behaviour is strictly prohibited and will result in immediate account suspension.",
        "Constructive criticism and honest feedback are welcome; personal attacks are not.",
      ],
    },
    {
      heading: "Protect privacy",
      body: [
        "Do not share another person's personal information without their consent.",
        "Do not use contact details you obtain through the platform to reach people outside of a professional context.",
        "Candidates' profile information is shared with employers only as part of an application or profile match — do not misuse this access.",
      ],
    },
    {
      heading: "Keep content appropriate",
      body: [
        "All content you post — including profile photos, videos, and messages — must be professional and suitable for a career context.",
        "Explicit, violent, or otherwise inappropriate material is not permitted.",
        "Do not post spam, unsolicited promotional material, or content designed to redirect users away from the platform for commercial gain.",
      ],
    },
    {
      heading: "No manipulation or fraud",
      body: [
        "Do not create multiple accounts, use bots, or take any other action designed to game recommendations, search rankings, or any other platform feature.",
        "Do not solicit or accept money in connection with fake applications, reviews, or endorsements.",
        "Any attempt to manipulate or defraud users or AscendX will result in permanent removal and may be reported to relevant authorities.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "Only share content that you own or have the right to share. Do not upload copyrighted material without permission from the rights holder.",
        "If you believe content on the platform infringes your copyright, contact info@ascendxcareer.ai.",
      ],
    },
    {
      heading: "Reporting and enforcement",
      body: [
        "If you encounter content or behaviour that violates these guidelines, use the in-app reporting tools or email info@ascendxcareer.ai.",
        "We review every report and will take appropriate action, which may include warning, content removal, or account suspension.",
        "Severe or repeated violations will result in permanent removal from the platform.",
        "These guidelines are enforced at AscendX's sole discretion and are subject to change. We'll notify users of material updates.",
      ],
    },
  ],
};
