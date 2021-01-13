function localStringsURL(locale) {
    return new URL(`l10n/${locale}.json`, import.meta.url);
}

console.log(localStringsURL('ja'));