# GoHighLevel lead form integration

The quote section uses the official GoHighLevel (GHL) inline iframe for the Plombera estimation form. The public form URL and form ID are not private credentials. The reusable component retains a clearly marked, disabled preview for any page where a real form URL has not been supplied.

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

## Current official embed

The homepage is configured with this official GHL iframe URL and form ID:

```text
https://api.leadconnectorhq.com/widget/form/P7SlR4VtUD0pZKobLsYD
```

The companion `https://link.msgsndr.com/js/form_embed.js` script is loaded once by `GHLLeadForm.astro` to support the official inline embed behavior. No private API token or webhook credential is used in browser code.

## Retrieve or change the official embed

1. Open the form’s **Integrate** or **Embed** option in GHL.
2. Choose the official inline/iframe embed option and copy the public `https://` iframe source URL. Do not copy private API credentials into the site.
3. Pass the public iframe URL to `GHLLeadForm` in `src/sections/Portfolio.astro`, or set the public build-time environment variable for another page:

```sh
PUBLIC_GHL_FORM_URL=https://your-official-ghl-form-embed-url
```

4. Restart the Astro dev server or rebuild the static site. `GHLLeadForm.astro` renders the real iframe when a valid public HTTPS URL is supplied and otherwise renders the disabled preview.
5. Keep the URL out of committed source if the GHL URL is environment-specific. A public embed URL is not a secret, but it should still be managed as deployment configuration.

## Local and production verification

- Run `npm run build` and confirm both homepage and privacy-policy routes build.
- Open `/#request-quote` and verify the official English form loads without horizontal overflow.
- Submit test data only in the intended GHL test or staging workflow. Confirm a contact is created, the selected service is mapped correctly, and any approved notification or automation runs.
- Confirm validation, error, success, keyboard focus, and consent states inside the actual GHL form.
- Verify the browser console and network panel for blocked iframe, CSP, or mixed-content errors.
- Test the deployed HTTPS URL at 1440px, 1024px, 768px, 428px, 390px, and 320px widths. Adjust the iframe height in `GHLLeadForm.astro` or the GHL form’s own embed settings if content is clipped.

## Styling and language limitations

The form is an iframe, so the parent Astro page cannot style its inner labels, controls, validation messages, fonts, colors, or success state. Configure those styles in the GHL Form Builder. The outer white card, spacing, responsive layout, and privacy link are controlled by Plombera.

The site’s English/French toggle can translate Astro-rendered copy around the iframe, but it cannot translate content inside the GHL iframe. The configured embedded form is intentionally English. For bilingual production use, create and configure separate English and French GHL forms, then choose the appropriate public form URL by page or deployment configuration. Confirm both forms use equivalent field mappings and consent language.

## Before production

- Have the business review and approve the privacy-policy disclosures for collected information, GoHighLevel processing, retention, consent, and follow-up communications.
- Confirm the correct GHL sub-account, field mapping, notification recipients, automations, and consent requirements.
- Replace test data and verify a real end-to-end submission in the approved production workflow.
- Re-run accessibility, responsive, and performance checks against the deployed URL.
