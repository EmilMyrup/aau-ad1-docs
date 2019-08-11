---
title: "Sub Page"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

The following is a code block with JavaScript language syntax highlighting.

```javascript
MAX-SUBARRAY-BRUTE-FORCE(A)
    n = A.length
    max = -∞
    for l = 1 to n
        sum = 0
        for h = l to n
            sum = sum + A[h]
            if sum > max
                max = sum
                low = l
                high = h
    return (low, high)
```

Supports multiple languages.

The following is a code block with diff. Lines with `+` highlighted in green shade indicating an addition. Lines with `-` highlighted in red shade indicating a deletion.

```javascript
- const data = ['1','2'];
+ const data = [1,2];
```

## Live Editing example

```javascript react-live=true
<button className={"btn btn-default"}>Change my text</button>
```
