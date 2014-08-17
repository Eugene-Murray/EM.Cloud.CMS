using System;
using System.Linq;

namespace CMS.Core.LogHandling
{
    public interface ILogHandler
    {
        void WriteLog(string message, LogSeverity logSeverity, LogCategory logCategory);
    }
}
