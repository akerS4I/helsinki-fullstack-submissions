# SPA New Note Diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: {content: "brick by brick", date: "2026-06-19T22:06:55.605Z"}

    server-->>browser: 201 Created.
    deactivate server
    Note right of browser: Doesn't reload the page, just rerenders the note list
```
