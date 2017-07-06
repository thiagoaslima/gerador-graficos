export function downloadSVG(svgEl: SVGElement, anchor: HTMLAnchorElement) {

    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svgEl);

    // add namespaces.
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
        source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }

    // add xml declaration
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

    // convert svg source to URI data scheme.
    const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

    anchor.hreflang = 'image/svg+xml';
    anchor.title ='file.svg';
    // set url value to a element's href attribute.
    anchor.href = url;

    // you can download svg file by right click menu.
}
