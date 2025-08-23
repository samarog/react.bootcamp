┌──────────────────────────────────────────────┐
│ 1. Initial Render (App runs first time)      │
├──────────────────────────────────────────────┤
│ let now = new Date(2025, 1, 1, 12).toLocaleTimeString();  
│   → now = "12:00:00 PM"                      │
│ console.log(now) → logs "12:00:00 PM"        │
│ useState(now) → time = "12:00:00 PM"         │
│                                              │
│ DOM Rendered:                                │
│   <h1>12:00:00 PM</h1>                       │
│   <button>GET TIME</button>                  │
└──────────────────────────────────────────────┘

        │
        ▼

┌──────────────────────────────────────────────┐
│ 2. User Clicks "GET TIME" Button             │
├──────────────────────────────────────────────┤
│ refreshTime() runs:                          │
│   let newNow = new Date().toLocaleTimeString();
│   setTime(newNow);                           │
│                                              │
│ Example: newNow = "3:45:12 PM"               │
└──────────────────────────────────────────────┘

        │
        ▼

┌──────────────────────────────────────────────┐
│ 3. React State Update Triggers Re-Render     │
├──────────────────────────────────────────────┤
│ App re-runs:                                 │
│   let now = new Date(2025, 1, 1, 12)...      │
│   → logs "12:00:00 PM" again (always fixed)  │
│   But state is preserved: time = "3:45:12 PM"│
│                                              │
│ DOM Updated:                                 │
│   <h1>3:45:12 PM</h1>                        │
│   <button>GET TIME</button>                  │
└──────────────────────────────────────────────┘

        │
        ▼

┌──────────────────────────────────────────────┐
│ 4. Every Additional Click                    │
├──────────────────────────────────────────────┤
│ new Date() called again → newNow changes     │
│ setTime(newNow) → triggers re-render         │
│ h1 shows the latest time                     │
│ console.log still shows "12:00:00 PM" (fixed)│
└──────────────────────────────────────────────┘
