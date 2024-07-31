import numpy as np
import codecs
import json

with open('results.json', 'r', encoding='utf-8') as file:
    results = json.load(file)

out = "<tbody>"
for ar in results:
    row = "<tr>"
    for td in ar:
        row += "<td>" + td + "</td>"
    row = "</tr>\n"
out += "</tbody>"

print(out)