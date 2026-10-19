# GoHighLevel lead form integration

The quote section is ready for a real GoHighLevel (GHL) form, but no GHL form URL is committed to this repository. Until configured, the page shows a clearly marked, disabled preview that cannot collect or submit personal information.

## Create the form in GHL

1. In the correct GHL sub-account, create a form or survey for the quote workflow.
2. Add these required fields: Full Name, Email Address, Phone Number, and Plumbing Service.
3. Configure the Plumbing Service field as a dropdown with:
   - Leak Detection & Repair
   - Water Heater Services
   - Pipe Installation & Replacement
   - Toilet Repair & Installation
   - Emergency Plumbing
   - Other
4. Map each field to the intended GHL contact field or custom field. Confirm the phone field uses the desired phone format.
5. Configure any consent checkbox, notification, pipeline, tags, automation, and follow-up messages in GHL only after the business approves the workflow.

## Retrieve and activate the official embed

1. Open the form’s **Integrate** or **Embed** option in GHL.
2. Choose the official inline/iframe embed option and copy the public `https://` iframe source URL. Do not copy private API credentials into the site.
3. Set the public build-time environment variable:

```sh
PUBLIC_GHL_FORM_URL=https://your-official-ghl-form-embed-url
```

4. Restart the Astro dev server or rebuild the static site. Astro reads this value at build time, and `GHLLeadForm.astro` replaces the disabled preview with the real iframe.
5. Keep the URL out of committed source if the GHL URL is environment-specific. A public embed URL is not a secret, but it should still be managed as deployment configuration.

## Local and production verification

- Run `npm run build` and confirm both homepage and privacy-policy routes build.
- Open `/#request-quote` and verify the official form loads without horizontal overflow.
- Submit test data only in the intended GHL test or staging workflow. Confirm a contact is created, the selected service is mapped correctly, and any approved notification or automation runs.
- Confirm validation, error, success, keyboard focus, and consent states inside the actual GHL form.
- Verify the browser console and network panel for blocked iframe, CSP, or mixed-content errors.
- Test the deployed HTTPS URL at 1440px, 1024px, 768px, 428px, 390px, and 320px widths. Adjust the iframe height in `GHLLeadForm.astro` or the GHL form’s own embed settings if content is clipped.

## Styling and language limitations

The form is an iframe, so the parent Astro page cannot style its inner labels, controls, validation messages, fonts, colors, or success state. Configure those styles in the GHL Form Builder. The outer white card, spacing, responsive layout, and privacy link are controlled by Plombera.

The site’s English/French toggle can translate Astro-rendered copy around the iframe, but it cannot translate content inside a GHL iframe. For bilingual production use, create and configure separate English and French GHL forms, then choose the appropriate public form URL by page or deployment configuration. Confirm both forms use equivalent field mappings and consent language.

## Before production

- Have the business review and approve the privacy-policy disclosures for collected information, GoHighLevel processing, retention, consent, and follow-up communications.
- Confirm the correct GHL sub-account, field mapping, notification recipients, automations, and consent requirements.
- Replace test data and verify a real end-to-end submission in the approved production workflow.
- Re-run accessibility, responsive, and performance checks against the deployed URL.
