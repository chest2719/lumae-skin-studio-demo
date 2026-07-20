# Design decisions

## Core concept

Lumae is presented as a personal skin journal, not as a skincare shop, medical scanner, or spa catalogue.

## Conversion model

The primary conversion is **Skin Start**:

- 90 minutes
- 139 EUR
- personal skin analysis
- individually assembled first facial
- clear next-step recommendation

Visitors who already know their preferred treatment can still enter through a treatment detail page.

## Visual system

- Paper: `#F3F0E9`
- Ink: `#1C201E`
- Plum: `#34162F`
- Deep plum: `#24101F`
- Chalk: `#E4DED3`
- Clay: `#A96F5D`

The implementation intentionally uses almost no box shadows or pill-shaped UI. Editorial depth comes from typography, contrast, photography, borders, and spacing.

## Journal interaction

Each entry contains:

- an everyday skin observation
- a concrete closed-state hint
- questions Lumae would consider together with the client
- a possible entry service
- no automated diagnosis

Only one entry is expanded at a time. On small screens, detail content sits directly under the selected entry; the editorial panel follows below.

## Real-project replacements

Before using this concept for an actual studio:

1. replace the concept images with an original studio shoot
2. add real qualifications and hygienic-process details
3. connect the booking UI to the selected booking provider
4. create valid legal pages and cancellation terms
5. validate treatment wording and contraindications with the studio
6. add real reviews and documented client cases only with consent
