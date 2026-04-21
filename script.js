//4-21/26 this is gonna be a close one
const introScreen = document.getElementById("introScreen");
const app = document.getElementById("app");
const startButton = document.getElementById("beginTestButton");
let articles;













articles = [
    {
        id: 1,
        title: "Formulating Information Security Policies and Strategic Frameworks",
        text: "Well-developed and documented policies and strategies are the best practice form of controls in information security (IS) (Rhodes-Ousley, 2013, p. 58). Given the significance of IS for healthcare (Landi, 2015), the implementation of these practices appears to be a must for it.A strategy is a “complete plan for defense, detection, and deterrence” that includes all the relevant elements in it; policy is a description of “management intent for information protection” (Rhodes-Ousley, 2013, pp. 20, 58). There is no unified classification for the phenomena, but some general features allow researchers and practitioners to group IS policies and strategies into types. For instance, Ahmad, Maynard, and Park (2012) discuss the preventive strategy (PS) type that is primarily aimed at preventing any attack, disclosure, or breach. The authors point out that the use of PS is explained by the specifics of the organization: preventive measures are designed for particularly vulnerable industries.PS employs a variety of elements in its IS plan. For instance, the use of multiple technological safeguards, which are required by HIPAA (Murray, Calhoun, & Philipsen, 2011), is a form of technological PS measures. In particular, the employment of encryption is a viable strategy (Landi, 2015). Also, vulnerability checking, monitoring, and maintenance are important for PS (Ahmad et al., 2012). Finally, Ahmad et al. (2012) mention certain policies, especially the clean desk policy, that can promote PS. This policy implies that enforcement measures are also to be introduced into PS, including compliance-ensuring measures (both carrot and stick ones) and training (Chen, Ramamurthy, & Wen, 2012).Thus, PS can be aligned with current legislation as well as the company’s specifics and security-related objectives. Apart from that, PS does add value to stakeholders’ well-being. Here, the inclusion of extensive employee training in the strategy is illustrative because it is of benefit to employees as well as other stakeholders (Landi, 2015). Indeed, training makes sure that employees are capable of protecting the data, which improves security and also helps employees to avoid doing harm unintentionally.The key point of PS consists of directing multiple efforts at ensuring that security breaches do not occur, which applies to healthcare organizations due to their vulnerability and the simultaneous need for the protection of sensitive information. The mechanisms and elements of PS are multiple, but training, which is included in PS, is also a major vehicle which ensures that the policy and strategy are understood and assimilated."

    },
    {
        id: 2,
        title: "Asthma: Causes and Treatment",
        text: "Asthma is a chronic disease that impacts more than 300 million people around the world. There is evident heterogeneity in the pathogenesis of asthma in the phenotypes of visible traits and endotypes of molecular mechanisms. Asthma is directly correlated with immune system activation as well as airway hyperresponsiveness (AHR), mucus overproduction, and epithelial cell activation. Innate and adaptive types of immunity are active in immunological responses to asthma. There are two major groups of asthma. Type 2 asthma is characterized by esosinophilia and compromises type 2 T helper cells, lymphoid cells, and IgE-secreting B cells. Meanwhile, non-type 2 asthma is characterized by heterogeneous endotypes and phenotypes such as exercise and obesity-induced asthma (Boonpiyathad et al., 2019).Asthma is seeing an increased prevalence, incidence, and subsequently mortality worldwide. Asthma not only has a genetic origin but can be the effect of various environmental and lifestyle-associated risk factors. There are approximately 180,000 asthma-related deaths each year. Meanwhile asthma healthcare costs vary internationally, being $1,900 in Europe and $3,100 in the U.S. However, many countries are not seeing asthma as healthcare priority due to its non-communicable nature, and its having a tremendous social and economic burden (Nunes et al., 2017).Interleukin‐5 (IL‐5) is the primary cytokine involved in activating the eosinophils, creating the inflammation which defines asthma. One of the primary developed treatments are monoclonal antibodies which target IL-5 and its receptor. The majority of studies of anti-IL5 treatments showed clinically significant reduced rates of asthma exacerbation in half of severe asthma patients. Even non-eosinophilic patients saw improvements and reduction in exacerbation rates when treated with benralizumab (Farne et al., 2017).Uncontrolled asthma is associated with aspects such as smoking, a lower educational level, use of reliever treatment, and acute healthcare visits. Poor adherence to asthma treatment is the primary reason to decrease asthma control and healthcare visits (Selberg et al., 2019). One nursing intervention that has shown to be moderately effective is the use of patient education to teach inhaler techniques. The majority of interventions of this type in a meta-analysis demonstrated a 95% improvement in inhaler technique use, which is likely to prevent exacerbations of asthma. However, notably this intervention may require follow ups, and is more effective in adults while in children, the knowledge of the technique may wane over time. However, on the short-term educational interventions are highly effective and clinically relevant while being cost-effective (Klijn et al., 2017)."

    }
];