using CMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS.Data
{
    public interface IRepository
    {
        List<Page> GetAllPages();
        Page GetPageByTile(string pageTitle);

    }
}
