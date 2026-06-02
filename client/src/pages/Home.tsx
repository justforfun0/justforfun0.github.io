import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Zap, Calculator, BookOpen } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("theory");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Zig-Zag Transformer Calculator</h1>
          </div>
          <p className="text-muted-foreground">
            Dimensionnement rigoureux d'un transformateur de mise à la terre (couplage Zig-Zag)
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="theory" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Théorie</span>
            </TabsTrigger>
            <TabsTrigger value="case1" className="flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Cas Standard</span>
            </TabsTrigger>
            <TabsTrigger value="case2" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Cas Optimisé</span>
            </TabsTrigger>
          </TabsList>

          {/* Theory Section */}
          <TabsContent value="theory" className="space-y-8 fade-in-up">
            <Card>
              <CardHeader>
                <CardTitle className="section-divider">Fondamentaux Électromagnétiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    1.1 Loi de Maxwell-Faraday et Équation de Boucherot
                  </h3>
                  <div className="formula-box">
                    <p className="text-sm text-muted-foreground mb-2">Tension induite dans un enroulement :</p>
                    <p className="font-mono text-base mb-3">e(t) = -N × dΦ(t)/dt</p>
                    <p className="text-sm text-muted-foreground mb-2">Valeur efficace pour signal sinusoïdal :</p>
                    <p className="font-mono text-base">V = 4,44 × N × f × B_max × A_c</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    1.2 Topologie Zig-Zag (ZN)
                  </h3>
                  <div className="formula-box">
                    <p className="text-sm text-muted-foreground mb-2">Relation de tension simple et demi-bobine :</p>
                    <p className="font-mono text-base mb-2">V_p = √3 × V_zz</p>
                    <p className="font-mono text-base">V_zz = U / 3</p>
                    <p className="text-sm text-muted-foreground mt-3">
                      où U est la tension composée du réseau (400 V)
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    1.3 Dimensionnement du Noyau
                  </h3>
                  <div className="formula-box">
                    <p className="text-sm text-muted-foreground mb-2">Section du fer en fonction de la puissance :</p>
                    <p className="font-mono text-base">A_c = K × √(S / 3f)</p>
                    <p className="text-sm text-muted-foreground mt-3">
                      K : constante de dimensionnement | S : puissance apparente (VA) | f : fréquence (Hz)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Case 1: Standard */}
          <TabsContent value="case1" className="space-y-8 fade-in-up">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="section-divider">Cas n°1 : Conception Standard</CardTitle>
                  <Badge className="case-badge-standard">Standard</Badge>
                </div>
                <CardDescription>Dimensionnement basé sur la puissance totale du système</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Input Parameters */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-accent" />
                    Données d'entrée
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Paramètre</th>
                          <th className="text-center py-3 px-4 font-semibold text-foreground">Symbole</th>
                          <th className="text-center py-3 px-4 font-semibold text-foreground">Valeur</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Unité</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Puissance apparente</td>
                          <td className="text-center py-3 px-4 font-mono">S</td>
                          <td className="text-center py-3 px-4 font-mono">5500</td>
                          <td className="py-3 px-4">VA</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Tension composée</td>
                          <td className="text-center py-3 px-4 font-mono">U</td>
                          <td className="text-center py-3 px-4 font-mono">400</td>
                          <td className="py-3 px-4">V</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Fréquence</td>
                          <td className="text-center py-3 px-4 font-mono">f</td>
                          <td className="text-center py-3 px-4 font-mono">50</td>
                          <td className="py-3 px-4">Hz</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Induction maximale</td>
                          <td className="text-center py-3 px-4 font-mono">B_max</td>
                          <td className="text-center py-3 px-4 font-mono">1,3</td>
                          <td className="py-3 px-4">T</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Densité de courant</td>
                          <td className="text-center py-3 px-4 font-mono">J</td>
                          <td className="text-center py-3 px-4 font-mono">3</td>
                          <td className="py-3 px-4">A/mm²</td>
                        </tr>
                        <tr className="hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Constante de section</td>
                          <td className="text-center py-3 px-4 font-mono">K</td>
                          <td className="text-center py-3 px-4 font-mono">0,5</td>
                          <td className="py-3 px-4">(SI)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <Separator />

                {/* Calculations */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-accent" />
                    Calculs des Tensions et Courants
                  </h3>
                  <div className="space-y-4">
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Tension simple de phase :</p>
                      <p className="font-mono text-base mb-2">V_p = 400 / √3 ≈ 230,94 V</p>
                    </div>
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Tension par demi-bobine :</p>
                      <p className="font-mono text-base mb-2">V_zz = 400 / 3 ≈ 133,33 V</p>
                    </div>
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Courant de ligne nominal :</p>
                      <p className="font-mono text-base mb-2">I_L = 5500 / (√3 × 400) ≈ 7,9386 A</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Magnetic Sizing */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-accent" />
                    Dimensionnement Magnétique
                  </h3>
                  <div className="space-y-4">
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Section du noyau (A_c) :</p>
                      <p className="font-mono text-base mb-2">A_c = 0,5 × √(5500 / 150) ≈ 3,0277 × 10⁻³ m²</p>
                      <p className="font-mono text-base text-accent font-semibold">A_c ≈ 30,28 cm²</p>
                    </div>
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Nombre de spires par demi-bobine :</p>
                      <p className="font-mono text-base mb-2">N = 133,33 / (4,44 × 50 × 1,3 × 3,0277 × 10⁻³)</p>
                      <p className="font-mono text-base mb-2">N ≈ 152,62 spires</p>
                      <p className="font-mono text-base text-accent font-semibold">Retenu : N = 153 spires (306 par colonne)</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Electrical Sizing */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-accent" />
                    Dimensionnement Électrique
                  </h3>
                  <div className="space-y-4">
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Section du conducteur de cuivre :</p>
                      <p className="font-mono text-base mb-2">S_cu = 7,9386 / 3 ≈ 2,6462 mm²</p>
                    </div>
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Diamètre du fil rond (nu) :</p>
                      <p className="font-mono text-base mb-2">d = √(4 × 2,6462 / π) ≈ 1,835 mm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Case 2: Optimized */}
          <TabsContent value="case2" className="space-y-8 fade-in-up">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="section-divider">Cas n°2 : Conception Ultra-Optimisée</CardTitle>
                  <Badge className="case-badge-optimized">Optimisé</Badge>
                </div>
                <CardDescription>Dimensionnement basé sur les courants réels de déséquilibre</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Input Parameters */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-accent" />
                    Données d'entrée
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Paramètre</th>
                          <th className="text-center py-3 px-4 font-semibold text-foreground">Symbole</th>
                          <th className="text-center py-3 px-4 font-semibold text-foreground">Valeur</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Unité</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Puissance de déséquilibre</td>
                          <td className="text-center py-3 px-4 font-mono">S_deseq</td>
                          <td className="text-center py-3 px-4 font-mono">500</td>
                          <td className="py-3 px-4">VA</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Tension composée</td>
                          <td className="text-center py-3 px-4 font-mono">U</td>
                          <td className="text-center py-3 px-4 font-mono">400</td>
                          <td className="py-3 px-4">V</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Fréquence</td>
                          <td className="text-center py-3 px-4 font-mono">f</td>
                          <td className="text-center py-3 px-4 font-mono">50</td>
                          <td className="py-3 px-4">Hz</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Induction maximale</td>
                          <td className="text-center py-3 px-4 font-mono">B_max</td>
                          <td className="text-center py-3 px-4 font-mono">1,6</td>
                          <td className="py-3 px-4">T</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Densité de courant</td>
                          <td className="text-center py-3 px-4 font-mono">J</td>
                          <td className="text-center py-3 px-4 font-mono">5</td>
                          <td className="py-3 px-4">A/mm²</td>
                        </tr>
                        <tr className="hover:bg-secondary transition-colors">
                          <td className="py-3 px-4">Constante de section</td>
                          <td className="text-center py-3 px-4 font-mono">K</td>
                          <td className="text-center py-3 px-4 font-mono">0,45</td>
                          <td className="py-3 px-4">(SI)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <Separator />

                {/* Calculations */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-accent" />
                    Calculs des Tensions et Courants
                  </h3>
                  <div className="space-y-4">
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Tension par demi-bobine :</p>
                      <p className="font-mono text-base mb-2">V_zz = 400 / 3 ≈ 133,33 V</p>
                    </div>
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Courant homopolaire (par phase) :</p>
                      <p className="font-mono text-base mb-2">I_0 = 500 / 230,94 ≈ 2,1651 A</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Magnetic Sizing */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-accent" />
                    Dimensionnement Magnétique
                  </h3>
                  <div className="space-y-4">
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Section du noyau (A_c) :</p>
                      <p className="font-mono text-base mb-2">A_c = 0,45 × √(500 / 150) ≈ 0,8216 × 10⁻³ m²</p>
                      <p className="font-mono text-base text-accent font-semibold">A_c ≈ 8,22 cm²</p>
                    </div>
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Nombre de spires par demi-bobine :</p>
                      <p className="font-mono text-base mb-2">N = 133,33 / (4,44 × 50 × 1,6 × 0,8216 × 10⁻³)</p>
                      <p className="font-mono text-base mb-2">N ≈ 456,92 spires</p>
                      <p className="font-mono text-base text-accent font-semibold">Retenu : N = 457 spires (914 par colonne)</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Electrical Sizing */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-accent" />
                    Dimensionnement Électrique
                  </h3>
                  <div className="space-y-4">
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Section du conducteur de cuivre :</p>
                      <p className="font-mono text-base mb-2">S_cu = 2,1651 / 5 ≈ 0,4330 mm²</p>
                    </div>
                    <div className="formula-box">
                      <p className="text-sm text-muted-foreground mb-2">Utilisation de fil méplat :</p>
                      <p className="text-sm text-foreground">
                        La section de 0,433 mm² permet une compacité accrue. Avec un coefficient de remplissage de 0,75 contre 0,4 pour le fil rond, le volume de la fenêtre de bobinage est réduit d'environ 45%.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Comparative Summary */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="section-divider">Synthèse Comparative Finale</CardTitle>
            <CardDescription>Comparaison des deux approches de dimensionnement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Caractéristique</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Unité</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Cas Standard</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Cas Optimisé</th>
                    <th className="text-center py-3 px-4 font-semibold text-accent">Gain / Écart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-secondary transition-colors">
                    <td className="py-3 px-4 font-semibold">Section Fer (A_c)</td>
                    <td className="text-center py-3 px-4">cm²</td>
                    <td className="text-center py-3 px-4 font-mono">30,28</td>
                    <td className="text-center py-3 px-4 font-mono">8,22</td>
                    <td className="text-center py-3 px-4 font-mono text-accent font-semibold">-72,8%</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary transition-colors">
                    <td className="py-3 px-4 font-semibold">Section Cuivre (S_cu)</td>
                    <td className="text-center py-3 px-4">mm²</td>
                    <td className="text-center py-3 px-4 font-mono">2,65</td>
                    <td className="text-center py-3 px-4 font-mono">0,43</td>
                    <td className="text-center py-3 px-4 font-mono text-accent font-semibold">-83,7%</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary transition-colors">
                    <td className="py-3 px-4 font-semibold">Nombre de spires (N)</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4 font-mono">153</td>
                    <td className="text-center py-3 px-4 font-mono">457</td>
                    <td className="text-center py-3 px-4 font-mono text-accent font-semibold">+198%</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary transition-colors">
                    <td className="py-3 px-4 font-semibold">Induction (B_max)</td>
                    <td className="text-center py-3 px-4">T</td>
                    <td className="text-center py-3 px-4 font-mono">1,3</td>
                    <td className="text-center py-3 px-4 font-mono">1,6</td>
                    <td className="text-center py-3 px-4 font-mono text-accent font-semibold">+23%</td>
                  </tr>
                  <tr className="hover:bg-secondary transition-colors">
                    <td className="py-3 px-4 font-semibold">Densité (J)</td>
                    <td className="text-center py-3 px-4">A/mm²</td>
                    <td className="text-center py-3 px-4 font-mono">3</td>
                    <td className="text-center py-3 px-4 font-mono">5</td>
                    <td className="text-center py-3 px-4 font-mono text-accent font-semibold">+66%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-secondary rounded-lg border border-border">
              <p className="text-foreground font-semibold mb-2">Conclusion</p>
              <p className="text-sm text-foreground">
                L'approche optimisée permet de diviser par près de 4 la section du circuit magnétique en se concentrant sur le besoin réel (courants de déséquilibre) et en utilisant des matériaux à hautes performances (M110-27S) et un refroidissement forcé.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container py-8">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Mobility Corner - Bureau d'Études | Ingénieur CSEE
          </p>
        </div>
      </footer>
    </div>
  );
}
