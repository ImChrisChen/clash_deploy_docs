module.exports = {
  apps : [{
    name: "clash",
    instances: 'max',
    script: "/root/_clash/clash",
    args: "-d /root/_clash",
    watch: true,
    max_memory_restart: '1G',
  }],
};
