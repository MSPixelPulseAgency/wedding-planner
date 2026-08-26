#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "$0")/.." && pwd)"
image_dir="$project_root/public/media/images"
video_dir="$project_root/public/media/videos"
tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT

mkdir -p "$image_dir" "$video_dir"

photos=(
  "floral-wedding-interior|33104582"
  "rustic-floral-wedding-setup|37901024"
  "modern-reception-floral-corner|17119948"
  "outdoor-wedding-tent|32854451"
  "south-asian-floral-stage|34389342"
  "garden-reception-lights|12954016"
  "garden-ceremony-aisle|35279308"
  "indoor-wedding-arch|34808252"
  "woodland-wedding-ceremony|14703685"
  "orchid-wedding-installation|18530977"
  "beach-wedding-vows|12178589"
  "indian-wedding-ceremony|12200848"
  "sunset-beach-wedding|35760200"
  "floral-reception-newlyweds|32142686"
  "delhi-indian-wedding|24334713"
  "south-asian-wedding-aisle|27825199"
  "joyful-indian-wedding|30215313"
  "pastel-wedding-reception|37710440"
  "muslim-beach-wedding|32579990"
  "elegant-reception-couple|32149797"
  "indian-wedding-ritual|12718388"
  "formal-event-couple|32147266"
  "chicago-loft-tablescape|11434576"
  "white-floral-table|17315407"
  "colourful-candle-tablescape|27378774"
  "string-light-reception|9375427"
  "modern-candle-tablescape|28450665"
  "warm-wedding-candle|17315461"
  "romantic-table-setting|6659531"
  "vintage-floral-tablescape|37423116"
  "gold-accent-place-setting|6479558"
  "white-rose-reception-table|35985206"
  "lavender-gala-dinner|36873712"
  "floating-candle-table|34580057"
  "editorial-wedding-couple|19390350"
  "garden-wedding-portrait|13470064"
  "wedding-hands-detail|12681834"
  "intimate-wedding-portrait|11391115"
  "timeless-wedding-details|5774951"
  "muslim-wedding-embrace|34997294"
  "outdoor-muslim-wedding|19698116"
  "wedding-ceremony-hands|27743346"
  "outdoor-wedding-conversation|11967008"
  "black-tie-wedding-portrait|37055942"
  "corporate-gala-hall|35042459"
  "african-wedding-portrait|10899419"
  "corporate-toast|6405661"
  "gala-banquet|14636319"
  "conference-audience|9275222"
  "networking-room|8761636"
  "event-hall-classic|16985127"
  "event-hall-modern|16985187"
  "conference-details|8761738"
  "conference-conversation|8761782"
  "ring-exchange-closeup|18706408"
  "wedding-rings-hands|10689262"
  "rings-invitation|30232952"
  "jewish-ring-ceremony|31416469"
  "sparkler-celebration|30467895"
  "senior-birthday|7867443"
  "anniversary-couple|32083132"
  "birthday-candles|20346916"
  "keynote-speaker|34774347"
  "conference-presentation|29708258"
  "conference-crowd|20733081"
  "conference-stage|29708255"
  "toronto-waterfront|13420120"
  "toronto-skyline|13653632"
  "toronto-night|17796162"
  "toronto-sunset|25696388"
)

for entry in "${photos[@]}"; do
  IFS='|' read -r name id <<< "$entry"
  output="$image_dir/$name.webp"
  if [[ -f "$output" ]]; then
    continue
  fi
  source="$tmp_dir/$id.jpg"
  curl -L --fail --silent --show-error \
    "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=1600" \
    -o "$source"
  cwebp -quiet -q 80 -mt "$source" -o "$output"
done

videos=(
  "candlelit-reception|31010680"
  "milestone-party-setup|7864663"
  "beach-reception-setup|5189917"
  "inclusive-wedding-party|8914893"
  "illuminated-event-stage|4317201"
  "outdoor-wedding-procession|34506432"
  "beachfront-wedding-venue|30982289"
  "ceremony-entrance|14268100"
)

for entry in "${videos[@]}"; do
  IFS='|' read -r name id <<< "$entry"
  output="$video_dir/$name.mp4"
  if [[ -f "$output" ]]; then
    continue
  fi
  source="$tmp_dir/$id.mp4"
  curl -L --fail --silent --show-error \
    "https://www.pexels.com/download/video/$id/" \
    -o "$source"
  ffmpeg -loglevel error -y -i "$source" -t 8 -an \
    -vf "scale='if(gt(iw,ih),1280,-2)':'if(gt(iw,ih),-2,1280)'" \
    -c:v libx264 -preset slow -crf 29 -movflags +faststart -pix_fmt yuv420p \
    "$output"
done

printf 'Prepared %s images and %s videos.\n' "${#photos[@]}" "${#videos[@]}"
