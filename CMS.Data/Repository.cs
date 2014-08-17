using CMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS.Data
{
    public class Repository : IRepository, IDisposable
    {
        private List<Page> Stations = PageList();

        private static List<Page> PageList()
        {
            return new List<Page>
            {
                new Page { 
                    Id = 1,
                    Title = "Home",
                    StructureTemplate = new StructureTemplate { 
                        Id = 1,
                        Title = "2 Section Template",
                        Sections = new List<Section> {
                            new Section { 
                                Id = 1,
                                Title = "Section 1",
                                Widget = new Widget {
                                     Id = 1,
                                     Title = "Widget 1"
                                }
                            },
                            new Section { 
                                Id = 2,
                                Title = "Section 2",
                                Widget = new Widget {
                                     Id = 1,
                                     Title = "Widget 2"
                                }
                            }

                        }
                    }
                },
                new Page { 
                    Id = 2,
                    Title = "10 Sections",
                    StructureTemplate = new StructureTemplate { 
                        Id = 1,
                        Title = "2 Section Template",
                        Sections = new List<Section> {
                            new Section { 
                                Id = 1,
                                Title = "Section 1",
                                Widget = new Widget {
                                     Id = 1,
                                     Title = "Widget 1"
                                }
                            },
                            new Section { 
                                Id = 2,
                                Title = "Section 2",
                                Widget = new Widget {
                                     Id = 1,
                                     Title = "Widget 2"
                                }
                            }

                        }
                    }
                }

            };
        }
        
        protected void Dispose(bool disposing)
        {
            if (disposing)
            {
                // Dispose Database connection

                //if (db != null)
                //{
                //    db.Dispose();
                //    db = null;
                //}
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public List<Page> GetAllPages()
        {
            throw new NotImplementedException();
        }

        public Page GetPageByTile(string pageTitle)
        {
            throw new NotImplementedException();
        }
    }
}
