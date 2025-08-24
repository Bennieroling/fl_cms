# API Documentation

## Overview

This document describes the API endpoints available in the CMS Laboral application. All endpoints are serverless functions deployed on Vercel and handle contact form submissions and demo requests.

## Base URL

```
https://your-domain.com/api/
```

## Authentication

API endpoints do not require authentication for public form submissions. Internal email sending is secured through environment variables.

---

## Contact Form Endpoint

### `POST /api/send-demo`

Handles contact form submissions and demo requests from the website. Sends notification emails to administrators and confirmation emails to users.

#### Purpose
- Process contact form data from potential clients
- Send internal notifications to the CMS Laboral team
- Send confirmation emails to users acknowledging their submission
- Validate form data and prevent spam submissions

#### Request

**Method:** `POST`

**Content-Type:** `application/json`

**Request Body:**

```json
{
  "fullName": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "companyName": "string (optional)",
  "message": "string (required)",
  "website": "string (honeypot field - should be empty)"
}
```

**Field Descriptions:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `fullName` | string | Yes | Contact person's full name |
| `email` | string | Yes | Contact person's email address |
| `phone` | string | No | Contact person's phone number |
| `companyName` | string | No | Name of the company making the inquiry |
| `message` | string | Yes | Inquiry message or request details |
| `website` | string | No | Honeypot field for spam prevention (should be empty) |

#### Response

**Success Response (200 OK):**

```json
{
  "success": true,
  "ids": ["email_id_1", "email_id_2"]
}
```

**Error Responses:**

**400 Bad Request - Missing Required Fields:**
```json
{
  "error": "Missing required fields"
}
```

**405 Method Not Allowed:**
```json
{
  "error": "Method Not Allowed"
}
```

**500 Internal Server Error:**
```json
{
  "error": "Email service not configured"
}
```

or

```json
{
  "error": "Failed to send email"
}
```

#### Email Templates

The endpoint uses two HTML email templates:

1. **Notification Email** (`templates/notification_email.html`)
   - Sent to: Administrator team
   - Purpose: Notify team of new contact form submission
   - Contains: All form data with professional formatting

2. **Confirmation Email** (`templates/confirmation_email.html`)
   - Sent to: User who submitted the form
   - Purpose: Confirm receipt of their inquiry
   - Contains: Acknowledgment and copy of submitted data

#### Template Variables

Both templates support the following variables that are dynamically replaced:

| Variable | Description |
|----------|-------------|
| `{{nombre-contacto}}` | Contact person's full name |
| `{{contact-email}}` | Contact person's email |
| `{{telefono}}` | Phone number (or '-' if not provided) |
| `{{nombre-empresa}}` | Company name (or '-' if not provided) |
| `{{mensaje}}` | Message content (with line breaks converted to HTML) |
| `{{date}}` | Current date/time in Spanish format |

#### Environment Variables

The endpoint requires the following environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `RESEND_API_KEY` | Resend.com API key for sending emails | Required |
| `FROM_EMAIL` | Email address to send from | `"CMS Laboral <hello@cms.com.ar>"` |
| `ALERT_TO_EMAIL` | Email address to receive notifications | `"hello@festinalente.dev"` |

#### Spam Protection

The endpoint includes spam protection mechanisms:

1. **Honeypot Field**: The `website` field should be empty in legitimate submissions
2. **Required Field Validation**: Ensures critical fields are present
3. **HTML Escaping**: All user input is escaped to prevent XSS attacks

#### Error Handling

The endpoint handles various error scenarios:

- **Missing Environment Variables**: Returns 500 error if email service is not configured
- **Invalid Request Method**: Returns 405 for non-POST requests
- **Missing Required Fields**: Returns 400 if fullName, email, or message are missing
- **Email Send Failures**: Returns 500 if either notification or confirmation email fails
- **Template Loading Errors**: Falls back to hardcoded templates if file loading fails

#### Usage Example

**JavaScript/Fetch:**

```javascript
const response = await fetch('/api/send-demo', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fullName: 'Juan Pérez',
    email: 'juan@empresa.com',
    phone: '+54 11 1234-5678',
    companyName: 'Empresa ABC',
    message: 'Necesito información sobre sus servicios de medicina ocupacional.',
    website: '' // honeypot field - leave empty
  })
});

const result = await response.json();

if (result.success) {
  console.log('Email sent successfully:', result.ids);
} else {
  console.error('Error:', result.error);
}
```

**cURL:**

```bash
curl -X POST https://your-domain.com/api/send-demo \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Juan Pérez",
    "email": "juan@empresa.com",
    "phone": "+54 11 1234-5678",
    "companyName": "Empresa ABC",
    "message": "Necesito información sobre sus servicios de medicina ocupacional.",
    "website": ""
  }'
```

#### Response Time

Typical response times:
- Success: 2-5 seconds (includes sending 2 emails)
- Error: < 1 second

#### Rate Limiting

No explicit rate limiting is implemented at the API level. Rate limiting may be enforced by the hosting platform (Vercel) or can be added using middleware if needed.

#### Email Service Provider

The endpoint uses **Resend** (https://resend.com) as the email service provider, which provides:
- High deliverability rates
- Professional email infrastructure
- Detailed sending analytics
- Transactional email optimizations

---

## Technical Implementation Details

### File Structure
```
api/
├── send-demo.ts          # Main API endpoint
└── API_DOCUMENTATION.md  # This documentation

templates/
├── notification_email.html   # Admin notification template
└── confirmation_email.html   # User confirmation template
```

### Dependencies
- `@vercel/node` - Vercel serverless function types
- `resend` - Email sending service
- Node.js built-in modules (`fs`, `path`)

### Security Considerations
- All user input is escaped using HTML entity encoding
- Honeypot field prevents basic bot submissions  
- Environment variables protect API keys
- No sensitive data is logged or exposed
- Email addresses are validated by the Resend service

### Monitoring and Debugging
- Console logging for successful operations and errors
- Email IDs returned for tracking sent messages
- Fallback templates ensure service continuity
- Detailed error messages for debugging

---

## Support

For technical issues with the API endpoints:
1. Check the server logs for detailed error messages
2. Verify all environment variables are properly set
3. Ensure the Resend API key has proper permissions
4. Confirm email templates exist and are accessible

For questions about implementation or integration, refer to the main project documentation in the README.md file.