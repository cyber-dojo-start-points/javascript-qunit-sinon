'use strict';

export default function checksum(text) {
  return text.length % 256;
}
