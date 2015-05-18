# Scrollfix

A simple plugin to work around that nasty [scroll bug](https://github.com/adobe/brackets/issues/10214) that was supposed to be fixed in 1.3, but only [got worse](https://github.com/adobe/brackets/issues/11083) by becoming incosistent between good and bad, rather than consistently bad.

My take is to simply translate ALL scroll events into new ones, containing a (fairly) correct deltaY, all the while replacing Brackets' own "ignore every other scroll event" trick.

## Disclaimer

I don't think I'll be supporting this extension for very long. The Brackets team promised to have this solved in the near future, either by moving to Electron or by having CEF fix this nonsense once and for all, but properly. Either way, this extension won't need to exist for very long.