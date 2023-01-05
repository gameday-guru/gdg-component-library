import { mock, Mockable } from "./mockable";

export interface Toslike extends Mockable {
    title ? : string;
    content ? : string;
}

export const MockTos : Toslike = mock<Toslike>({
    title : "Terms of Service",
    content : 
`
### Terms
By accessing this web site, you are agreeing to be bound by these web site Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.

### Disclaimer
The materials on Gameday Guru, Inc’s web site are provided “as is”. Gameday Guru, Inc makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Gameday Guru, Inc does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.

### Limitations
In no event shall Gameday Guru, Inc or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Gameday Guru, Inc’s Internet site, even if Gameday Guru, Inc or a Gameday Guru, Inc authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.

### Revisions and Errata
The materials appearing on Gameday Guru, Inc’s web site could include technical, typographical, or photographic errors. Gameday Guru, Inc does not warrant that any of the materials on its web site are accurate, complete, or current. Gameday Guru, Inc may make changes to the materials contained on its web site at any time without notice. Gameday Guru, Inc does not, however, make any commitment to update the materials.

### Links
Gameday Guru, Inc has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Gameday Guru, Inc of the site. Use of any such linked web site is at the user’s own risk.

### Site Terms of Use Modifications
Gameday Guru, Inc may revise these terms of use for its web site at any time without notice. By using this web site, you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
`
})