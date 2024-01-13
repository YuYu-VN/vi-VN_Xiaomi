function FindProxyForURL(url, host) {
    // If the hostname matches, send direct.
    if (dnsDomainIs(host, "*.com") || dnsDomainIs(host, "*.net"))
        return "DIRECT";

    // If the protocol or URL matches, send direct.
    if (url.substring(0, 4)=="ftp:")
        return "DIRECT";

    // If the requested website is hosted within the internal network, send direct.
    if (isPlainHostName(host) || shExpMatch(host, "*.local") || isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") || isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") || isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") || isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
        return "DIRECT";

    // If the IP address of the local machine is within a defined subnet, send to a specific proxy.
    if (isInNet(myIpAddress(), "10.10.5.0", "255.255.255.0"))
        return "PROXY 1.2.3.4:8080";

    // DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "PROXY 192.168.128.2:10809";
}
